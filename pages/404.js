import React from 'react';
import PageTitle from '../components/common/title/pageTitle'

export default function NotFound() {
    return (
        <section style={{ minHeight: 'calc(100vh - 113px)' }}>
            <PageTitle title="Not Found" />
            <p>Sorry, the page you are looking for does not exist.</p>
        </section>
    );
};

