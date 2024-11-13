import Link from 'next/link';
import PageTitle from '../../components/common/title/pageTitle';
import { getSortedDocsData } from '../../utils/docs';

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
            <PageTitle title="All Items" />
            <ul>
                {allPostsData.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/docs/${id}`} className="gds-button--link">
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
