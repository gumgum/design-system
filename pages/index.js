import { Card, CardBlock, Divider } from "gumdrops";
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
      <PageTitle title="Concrete Design System" />
      <Card>
        <CardBlock>
          <p className="-m-b-2">
            GumGum&apos;s Concrete Design System documentation is currently a
            work in progress.
          </p>
          <p>Documentation checklist:</p>
          <ul className="gds-checklist">
            <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--inverse">
              <span className="gds-checklist__item-text">Subatomic</span>
            </li>
            <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--inverse gds-checklist__item--completed">
              <span className="gds-checklist__item-text">Atoms</span>
            </li>
            <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--inverse">
              <span className="gds-checklist__item-text">Molecules</span>
            </li>
            <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--inverse">
              <span className="gds-checklist__item-text">Organisms</span>
            </li>
            <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--inverse">
              <span className="gds-checklist__item-text">Templates/Pages</span>
            </li>
            <li className="gds-checklist__item gds-checklist__item--sm gds-checklist__item--inverse">
              <span className="gds-checklist__item-text">Utilities</span>
            </li>
          </ul>
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
