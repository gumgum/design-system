import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';

export default function About() {
    const router = useRouter();
    return (
        <div>
            This template is for GumGum apps.
            <Link
                href={{
                    pathname: `${router.asPath}/?modalItem=category`,
                    query: {
                        id: 'IDIDID',
                        title: 'This is a title',
                    },
                }}
                as={`/examples/modal`}
                className="gds-button gds-button--xs gds-button--primary">
                Add Category
            </Link>
        </div>
    );
}
