import Link from "next/link"
import { getSortedDocsData } from "../../utils/docs"

export async function getStaticProps() {
    const allPostsData = getSortedDocsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default function AllDocsPage({allPostsData}) {
    return (
        <section>
        <h2>List of All Docs</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
              {title}
              <br />
              <Link href={`/docs/${id}`}>
                <a>
              {id}
              </a>
              </Link>
              <br />
              {/* Docs currently dont have dates but should be date stamped on last update */}
              {date} 
            </li>
          ))}
        </ul>
      </section>
    )
}
