import Head from 'next/head';
import PageTitle from '../../../components/common/title/pageTitle';
import { getAllDocIds, getDocData } from '../../../utils/docs';
import { useState, useEffect } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import {themes} from 'prism-react-renderer';
import { getAtomData } from '../../../utils/atoms';
import { fetchDataByType } from '../../../utils/fetchData';

export default function DocsPage({ docData }) {
    console.log(docData);
    const [viewError, setViewError] = useState(false);
    const [data, setData] = useState();
    const [code, setCode] = useState('');

    useEffect(() => {
        const response = fetchDataByType(docData.section, docData.id);
        if (response) {
            console.log(response);
            setData(response);
            setCode(response.code);
        }
    }, [docData.id]);

    return (
        <div style={{ minHeight: 'calc(100vh - 113px)' }}> 
            <Head>
                <title>{docData.title}</title>
            </Head>
            <PageTitle title={docData.title} />
            <p className="gds-text--body-sm">{docData.id}</p>
            <br />
            {docData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />

            <div className='-m-t-4'>
                {code && (
                    <LiveProvider theme={themes.dracula} code={code}>
                        <div className="gds-text--header-xs -m-b-2">Demo</div>
                        <LivePreview />
                        <LiveEditor style={{margin: '15px 0 8px 0'}} />
                        <button className='gds-button gds-button--primary gds-button-sm' onClick={() => setViewError(!viewError)}>Toggle Error Log</button>
                        {viewError && (
                            <LiveError
                                className="gds-text--body-sm gds-text--code"
                                style={{ whiteSpace: 'pre-wrap' }}
                            />
                        )}
                    </LiveProvider>
                )}
            </div>

        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllDocIds(); // This should return paths in the format of [{ params: { type: 'atom', id: 'componentId' } }]
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const docData = await getDocData(params.id);
    return {
        props: {
            docData,
        },
    };
} 