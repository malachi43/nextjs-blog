import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params: { id } }) {
    const postData = await getPostData(id);
    return {
        props: {
            postData,
        },
    };
}


export default function Post({ postData: { id, title, date, htmlContent } }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>
        </Layout>
    );
}