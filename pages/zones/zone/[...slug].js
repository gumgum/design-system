import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageTitle from '../../../components/common/title/pageTitle';
import Overview from '../../../components/zones/Overview';
import Slots from '../../../components/zones/Slots';
import Blocking from '../../../components/zones/Blocking';

const ZonePage = () => {
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
            slug: 'overview',
            label: 'Overview',
            component: <Overview />,
        },
        {
            slug: 'slots',
            label: 'Slots',
            component: <Slots />,
        },
        {
            slug: 'blocking',
            label: 'Blocking',
            component: <Blocking />,
        },
    ];

    const routeObj = routes.find(item => item.slug == route);

    return (
        <div>
            <PageTitle title="Zone Example" isEditable />
            <nav>
                <ul className="gds-nav-tabs gds-nav-tabs--sm gds-nav-tabs--justified">
                    {routes.map((tab, i) => {
                        return (
                            <li
                                key={i}
                                className={`gds-nav-tabs__list-item ${
                                    tab.slug == route ? 'gds-nav-tabs__list-item--active' : null
                                }`}>
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
                        top: '-1px',
                    }}>
                    {routeObj.component}
                </div>
            </section>
        </div>
    );
};

export default ZonePage;
