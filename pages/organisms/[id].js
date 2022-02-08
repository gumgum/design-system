import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Card, CardBlock, Column, Divider, Row } from "gumdrops";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import PageTitle from "../../components/common/title/pageTitle";
import CopyText from "../../components/common/copy/CopyText";
import { getDocData, getAllDocIds } from "../../utils/docs";
import { getOrganismsData } from "../../utils/organisms";

export default function DocsPage({ docData }) {
  const [viewError, setViewErrow] = useState(false);
  const [data, setData] = useState();
  const [code, setCode] = useState(data);

  useEffect(() => {
    let response = getOrganismsData(docData.id);
    if (response) {
      setData(response);
      setCode(response.code);
    } else {
      setData(response); // undefined
    }
  }, [docData.id]);

  return (
    <div style={{ minHeight: "calc(100vh - 113px)" }}>
      <Head>
        <title>{docData.title}</title>
      </Head>
      <div className="gds-flex gds-flex--justify-between">
        <PageTitle title={docData.title} />
        {data && data.gumdrops && (
          <a
            href={data.gumdrops}
            target="_blank"
            rel="noref noreferrer"
            className="gds-text--link"
          >
            GumDrops<i className="fas fa-external-link-alt -m-l-2"></i>
          </a>
        )}
      </div>
      <Row>
        <Column lg="8">
          {/* description */}
          <div
            className="-m-b-3"
            dangerouslySetInnerHTML={{ __html: docData.contentHtml }}
          />
          {code && (
            <LiveProvider theme={dracula} code={code}>
              <div className="gds-text--header-xs -m-b-2">Demo</div>
              <Card>
                <CardBlock>
                  <LivePreview />
                </CardBlock>
                <LiveEditor className="-bor-rad-b-1" />
              </Card>
              <Divider
                callback={() => setViewErrow(!viewError)}
                collapsible={true}
                label="Error Log"
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
        <Column lg="4" style={{ position: "sticky", top: 0 }}>
          {data && (
            <>
              <Card style={{ maxHeight: "50vh", overflowY: "scroll" }}>
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

              {data.related.length > 0 && (
                <Card style={{ maxHeight: "30vh", overflowY: "scroll" }}>
                  <CardBlock>
                    <Divider label="Related Items" />
                    {data.related.map((item) => {
                      return (
                        <Link key={item.title} href={item.url}>
                          <a className="gds-tag gds-tag--sm">{item.title}</a>
                        </Link>
                      );
                    })}
                  </CardBlock>
                </Card>
              )}
            </>
          )}
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
