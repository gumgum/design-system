import { Card, CardBlock } from 'gumdrops';
import Link from 'next/link';
import PageTitle from '../../components/common/title/pageTitle';
import { getSectionDocsData } from '../../utils/docs';

const section = 'atoms';

export async function getStaticProps() {
    const allPostsData = getSectionDocsData(section);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function AllDocsPage({ allPostsData }) {
    return (
        <section>
            <PageTitle title={section} />
            <p className="-m-b-2">
                If atoms are the basic building blocks of matter, then the atoms of our interfaces
                serve as the foundational building blocks that comprise all our user interfaces.
                These atoms include basic HTML elements like form labels, inputs, buttons, and
                others that can’t be broken down any further without ceasing to be functional.
            </p>
            <Card>
                <CardBlock>
                    <ul>
                        {allPostsData.map(({ id, title, section }) => (
                            <li key={id}>
                                <Link href={`/${section}/${id}`}>
                                    <a className="gds-button--link">{title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBlock>
            </Card>
        </section>
    );
}
