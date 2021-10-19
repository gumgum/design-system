import Head from "next/head";
import { useState } from "react";
import PageTitle from "../../components/common/title/pageTitle";
import { getAllDocIds, getDocData } from "../../utils/docs";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export default function DocsPage({ docData }) {
  console.log("doc", { docData });
  const [code, setCode] = useState({
    content: `<button className="gds-button gds-button--default">Default Test button</button>`,
  });
  return (
    <div>
      <Head>
        <title>{docData.title}</title>
      </Head>
      <PageTitle title={docData.title} className="-m-b-0" />
      <p className="gds-text--body-sm">{docData.id}</p>
      <br />
      {docData.date}
      <br />
      <LiveProvider code={code.content}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
      {/* <div dangerouslySetInnerHTML={{ __html: code.content }} /> */}
      <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
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
