import { Card, CardBlock, Divider } from 'gumdrops';
import Link from 'next/link';
import PageTitle from '../components/common/title/pageTitle';
import { getSortedDocsData } from '../utils/docs';

export async function getStaticProps() {
    const allPostsData = getSortedDocsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function AllDocsPage({ allPostsData }) {
    return (
        <section>
            <PageTitle title="Concrete Design System" />
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
                                <Link href={`/${section}/${id}`}>
                                    <a className="gds-button--link">
                                        {title}
                                        <span className="gds-badge">{section}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBlock>
            </Card>
        </section>
    );
}
