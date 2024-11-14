import Head from 'next/head';
import PageTitle from '../../components/common/title/pageTitle';
import { getAllDocIds, getDocData } from '../../utils/docs';

export default function DocsPage({ docData }) {
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
