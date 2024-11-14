import Head from 'next/head';
import PageTitle from '../../../components/common/title/pageTitle';
import { getDocData } from '../../../utils/docs';
import { useState, useEffect } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { themes } from 'prism-react-renderer';
import { fetchDataByType } from '../../../utils/fetchData';
import { APP_NAME } from '../../../utils'

export default function DocsPage({ docData }) {
    const [viewError, setViewError] = useState(false);
    const [data, setData] = useState();
    const [code, setCode] = useState('');

    useEffect(() => {
        const response = fetchDataByType(docData.section, docData.id);
        if (response) {
            setData(response);
            setCode(response.code);
        }
    }, [docData.id, docData.section]);

    const pageTitle = docData.title + ' | ' + APP_NAME;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <section style={{ minHeight: 'calc(100vh - 113px)' }}>
                <PageTitle title={docData.title} />
                <p className="gds-text--body-sm">{docData.id}</p>
                <br />
                {docData.date}
                <br />
                <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />

                <div className="-m-t-4">
                    {code && (
                        <LiveProvider theme={themes.dracula} code={code}>
                            <div className="gds-text--header-xs -m-b-2">Demo</div>
                            <LivePreview />
                            <LiveEditor style={{ margin: '15px 0 8px 0' }} />
                            <button
                                className="gds-button gds-button--primary gds-button-sm"
                                onClick={() => setViewError(!viewError)}>
                                Toggle Error Log
                            </button>
                            {viewError && (
                                <LiveError
                                    className="gds-text--body-sm gds-text--code"
                                    style={{ whiteSpace: 'pre-wrap' }}
                                />
                            )}
                        </LiveProvider>
                    )}
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const fs = await import('fs').then(mod => mod.default);
    const docData = await getDocData(fs, params.id);
    return {
        props: {
            docData,
        },
    };
}
