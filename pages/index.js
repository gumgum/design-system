import { Card } from "gumdrops";
import Link from "next/link";
import PageTitle from "../components/common/title/pageTitle";
import { getSortedDocsData } from "../utils/docs";

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
      <PageTitle title="All Docs" />
      <Card className="-p-h-4 -p-b-4">
        <ul>
          {allPostsData.map(({ id, section, title }) => (
            <li key={id}>
              <Link href={`/docs/${id}`}>
                <a className="gds-button--link">
                  {title}
                  <span className="gds-badge">{section}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
