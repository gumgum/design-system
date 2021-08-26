import Link from "next/link";
import PageTitle from "../../components/common/title/pageTitle";
import { getSectionDocsData } from "../../utils/docs";

const section = "molecules";

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
      <ul>
        {allPostsData.map(({ id, title, section }) => (
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
    </section>
  );
}
