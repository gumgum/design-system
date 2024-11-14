import Link from 'next/link';
import PageTitle from '../../components/common/title/pageTitle';
import { getSectionDocsData } from '../../utils/docs';
import { Card, CardBlock } from 'gumdrops';
import Head from 'next/head';
import { APP_NAME } from '../../utils'

export async function getStaticPaths() {
    const types = ['atoms', 'molecules', 'subatomic', 'utilities', 'organisms', 'pages'];
    const paths = types.map(type => ({ params: { type } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const allPostsData = getSectionDocsData(params.type);
    return {
        props: {
            allPostsData,
            params,
        },
    };
}

export default function AllDocsPage({ allPostsData, params }) {
    return (
        <>
            <Head>
                <title>{params?.type} | {APP_NAME}</title>
            </Head>

            <section style={{ minHeight: 'calc(100vh - 113px)' }}>
                <PageTitle
                    title={allPostsData.length > 0 ? allPostsData[0]?.section : params?.type}
                />
                <Card>
                    <CardBlock>
                        {allPostsData.length === 0 ? (
                            <div>
                                <h4 className="-m-b-2 gds-text--header-xs">Components</h4>
                                <hr className="gds-divider" />
                                <p>We are working on this.</p>
                            </div>
                        ) : (
                            <>
                                <h4 className="-m-b-2 gds-text--header-xs">Components</h4>
                                <hr className="gds-divider" />
                                <ul>
                                    {allPostsData.map(({ id, title }) => (
                                        <li key={id}>
                                            <Link
                                                href={`/${allPostsData[0]?.section}/${id}`}
                                                className="gds-button--link">
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </CardBlock>
                </Card>
            </section>
        </>
    );
}
