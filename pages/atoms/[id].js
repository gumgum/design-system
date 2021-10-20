import Head from "next/head";
import { useState, useEffect } from "react";
import { Card, CardBlock, Column, Divider, Row } from "gumdrops";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import prettier from "prettier/standalone";
import babelParser from "prettier/parser-babel";
import PageTitle from "../../components/common/title/pageTitle";
import CopyText from "../../components/common/copy/CopyText";
import { getDocData, getAllDocIds } from "../../utils/docs";
import { getAtomData } from "../../utils/atoms";

export default function DocsPage({ docData }) {
  const [viewError, setViewErrow] = useState(false);
  const { gumdrops, component, ...data } = getAtomData(docData.id);
  const [code, setCode] = useState(component);

  const formatOnKey = (e) => {
    if (e.ctrlKey && e.keyCode == 76) {
      setCode((currentCode) =>
        prettier.format(currentCode, {
          parser: "babel",
          plugins: [babelParser],
        })
      );
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", formatOnKey, false);
    return () => document.removeEventListener("keyup", formatOnKey, false);
  });

  return (
    <div>
      <Head>
        <title>{docData.title}</title>
      </Head>
      <div className="gds-flex gds-flex--justify-between">
        <PageTitle title={docData.title} />
        {gumdrops && (
          <a
            href={gumdrops}
            target="_blank"
            rel="noref noreferrer"
            className="gds-text--link"
          >
            GumDrops<i className="fas fa-external-link-alt -m-l-2"></i>
          </a>
        )}
      </div>
      <Row>
        <Column md="8">
          {/* description */}
          <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
          <div className="gds-text--header-xs -m-b-2">Demo</div>
          {code && (
            <LiveProvider theme={dracula} code={code}>
              <Card>
                <CardBlock>
                  <LivePreview />
                </CardBlock>
                <LiveEditor className="-bor-rad-b-1" />
              </Card>
              <Divider
                callback={() => setViewErrow(!viewError)}
                collapsible={true}
                label="View Error Log"
                open={viewError}
              />
              {viewError && (
                <LiveError
                  className="gds-text--body-sm gds-text--code"
                  style={{ whiteSpace: "pre-wrap" }}
                />
              )}
            </LiveProvider>
          )}
        </Column>
        <Column md="4">
          <Card>
            <CardBlock>
              {data.variants.map((variant, i) => {
                const options = variant.values;
                return (
                  <div key={i} className="-m-b-3">
                    <Divider label={variant.title} />
                    <div className="gds-text--body-md -m-b-2"></div>
                    {options.map((option) => (
                      <CopyText
                        copyText={option}
                        key={option}
                        className="-m-b-2"
                      />
                    ))}
                  </div>
                );
              })}
            </CardBlock>
          </Card>
        </Column>
      </Row>
    </div>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllDocIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the doc using params.id
  const docData = await getDocData(params.id);
  return {
    props: {
      docData,
    },
  };
}
