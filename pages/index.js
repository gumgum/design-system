// import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/router";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div>
//       <Head>
//         <title>GumGum Prototype Template</title>
//         <meta
//           name="description"
//           content="Template for GumGum internal applications"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <p>Welcome to GumGum</p>
//       <Link href={`/?modalItem=category`} as={`/examples/modal`}>
//         <a className="gds-button gds-button--xs gds-button--primary">
//           Add Category
//         </a>
//       </Link>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Dashboard from "../components/home/Dashboard";
import PageTitle from "../components/common/title/pageTitle";

const Index = () => {
  const router = useRouter();
  const [route, setRoute] = useState("home/dashboard");

  // useEffect(() => {
  //   if (router) {
  //     setRoute(router.query.slug);
  //   }
  // }, [router]);

  // if (!route) {
  //   return null;
  // }

  const routes = [
    {
      slug: "home/dashboard",
      label: "Dashboard",
      component: <Dashboard />,
    },
    {
      slug: "home/advertiser-spend",
      label: "Advertiser Spend",
      component: <Dashboard />,
    },
    {
      slug: "home/custom",
      label: "Custom Report",
      component: <Dashboard />,
    },
    {
      slug: "home/passback-campaigns",
      label: "Passback Campaigns",
      component: <Dashboard />,
    },
    {
      slug: "home/slot-revenue",
      label: "Slot Revenue",
      component: <Dashboard />,
    },
  ];

  const routeObj = routes.find((item) => item.slug == route);

  return (
    <div>
      {/* Notifications */}
      <div className="gds-well gds-well--success -m-b-3">
        <p className="gds-text--body-md">
          v2.3.14 - Zone feature updates: tabs have been consolidated with more
          control.
          <button className="gds-text-button gds-text-button--success  -m-l-3">
            View Feature
          </button>
        </p>
        <button className="gds-well__button"></button>
      </div>
      <div className="gds-well gds-well--primary -m-b-3">
        <p className="gds-text--body-md -m-b-2" style={{ maxWidth: 1200 }}>
          Updates to Publisher Reports: You can see there is a new Dashboard,
          Advertiser Spend Report, and Custom Report. For more information and
          how to navigate these new reports, see our Publisher Center Release
          Notes page or click the Info (I) icon on the bottom right of the page.
        </p>
        <p className="gds-text--body-md">
          <button className="gds-text-button">View Release Notes</button>
          <button className="gds-text-button  -m-l-3">Dismiss</button>
        </p>
        <button className="gds-well__button"></button>
      </div>
      <PageTitle title="Reporting" />
      <nav>
        <ul className="gds-nav-tabs gds-nav-tabs--sm gds-nav-tabs--justified">
          {routes.map((tab, i) => {
            return (
              <li
                key={i}
                className={`gds-nav-tabs__list-item ${
                  tab.slug == route ? "gds-nav-tabs__list-item--active" : null
                }`}
              >
                <Link href={tab.slug}>
                  <a className="gds-nav-tabs__link">{tab.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <section>
        <div
          className="gds-card -p-a-3"
          style={{
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            top: "-1px",
          }}
        >
          {routeObj.component}
        </div>
      </section>
    </div>
  );
};

export default Index;
