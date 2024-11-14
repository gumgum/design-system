import Link from 'next/link';
import PageTitle from '../../components/common/title/pageTitle';
import { getSectionDocsData } from '../../utils/docs';
import { Card, CardBlock } from 'gumdrops';
import Head from 'next/head';
import { APP_NAME } from '../../utils'
import { navItems } from '../../utils/nav'

export async function getServerSideProps({ params }) {

    if (navItems.filter(item => item.url === `/${params.type}`).length === 0) {
        return {
            notFound: true,
        };
    }

    const fs = await import('fs').then(mod => mod.default);
    const allPostsData = getSectionDocsData(fs, params.type);

    return {
        props: {
            allPostsData,
            params,
        },
    };
}

export default function AllDocsPage({ allPostsData, params }) {
    const capitalizedType = params?.type ? params.type.charAt(0).toUpperCase() + params.type.slice(1) : '';
    const pageTitle = capitalizedType + ' | ' + APP_NAME;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
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
