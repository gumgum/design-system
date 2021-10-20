import Head from "next/head";
import { useState } from "react";
import dracula from "prism-react-renderer/themes/dracula";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Card, CardBlock, Column, Divider, Row } from "gumdrops";
import PageTitle from "../../components/common/title/pageTitle";
import CopyText from "../../components/common/copy/CopyText";
import { getDocData } from "../../utils/docs";
import { getAtomData } from "../../utils/atoms";

export default function DocsPage({ docData }) {
  const [viewError, setViewErrow] = useState(false);
  const data = getAtomData(docData.data);

  return (
    <div>
      <Head>
        <title>Example Item</title>
      </Head>
      <div className="gds-flex gds-flex--justify-between">
        <PageTitle title={docData.title} />
        <a
          href="https://gumdrops.gumgum.com/"
          target="_blank"
          rel="noref noreferrer"
          className="gds-text--link"
        >
          GumDrops<i className="fas fa-external-link-alt -m-l-2"></i>
        </a>
      </div>
      <Row>
        <Column md="8">
          {/* description */}
          <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
          <div className="gds-text--header-xs -m-b-2">Demo</div>
          <LiveProvider theme={dracula} code={data.component}>
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

export async function getStaticProps() {
  // Fetch necessary data for the doc using params.id
  const docData = await getDocData("example-component");

  return {
    props: {
      docData,
    },
  };
}
