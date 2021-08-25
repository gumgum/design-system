import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const SettingsPage = () => {
  const router = useRouter();
  const [route, setRoute] = useState(null);

  useEffect(() => {
    if (router) {
      setRoute(router.query.slug);
    }
  }, [router]);

  if (!route) {
    return null;
  }

  const routes = [
    {
      slug: "user",
      label: "User",
      component: <h1>hello members</h1>,
    },
    {
      slug: "preferences",
      label: "Preferences",
      component: <h1>search </h1>,
    },
  ];

  const routeObj = routes.find((item) => item.slug == route);

  return (
    <div>
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
          Tab one content goes here. {route}
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
