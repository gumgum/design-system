import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { hideForLogin } from '../../utils/helper';

export default function Breadcrumbs() {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    // Setting Breadcrumbs
    useEffect(() => {
        //Make sure this is hidden on the login page
        if (hideForLogin(router)) {
            setBreadcrumbs(null);
            return null;
        } else if (router) {
            let linkPath = router.asPath.split('/');

            // hide query part of url
            linkPath = linkPath.filter(function (item) {
                return item.indexOf('?') !== 0;
            });

            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {
                    breadcrumb: path,
                    href: '/' + linkPath.slice(0, i + 1).join('/'),
                };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    if (breadcrumbs.length <= 1) {
        //return an empty div to take up the pixel space for page consistency
        return <div style={{ height: 35 }}>{null}</div>;
    }

    return (
        <nav className="gds-breadcrumb" aria-label="Breadcrumb">
            <ol className="gds-breadcrumb__list">
                {breadcrumbs.map(breadcrumb => {
                    return (
                        <li className="gds-breadcrumb__item" key={breadcrumb.href}>
                            <Link href={breadcrumb.href}>
                                <a className="gds-breadcrumb__link">
                                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

// Convert url to a string for title and uppercase the first letter
const convertBreadcrumb = string => {
    return string.replace(/-/g, ' ');
};
