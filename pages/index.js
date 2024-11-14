import { Card, CardBlock, Divider } from 'gumdrops';
import Link from 'next/link';
import PageTitle from '../components/common/title/pageTitle';
import { getSortedDocsData } from '../utils/docs';
import Head from 'next/head';
import { APP_NAME } from '../utils'

export async function getServerSideProps() {
    const fs = await import('fs').then(mod => mod.default);
    const allPostsData = getSortedDocsData(fs);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function AllDocsPage({ allPostsData }) {
    const pageTitle = APP_NAME;
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <PageTitle title={APP_NAME} />
            <Card>
                <CardBlock>
                    <p className="-m-b-2">
                        GumGum&apos;s Concrete Design System documentation is currently a work in
                        progress.
                    </p>
                    <Divider />
                    <p className="gds-text--sm gds-text--bold">Full Component List</p>
                    <ul className="-p-h-4">
                        {allPostsData.map(({ id, section, title }) => (
                            <li key={id}>
                                <Link href={`/${section}/${id}`} className="gds-button--link">
                                    {title}
                                    <span className="gds-badge">{section}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBlock>
            </Card>
        </>
    );
}
