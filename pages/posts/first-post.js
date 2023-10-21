import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => {
                        console.log(`script loaded completely. window.FB populated`)
                        console.log(window.FB)
                    }}
                />
            </Head>
            <h1>FirstPost</h1>
            <h2 >
                <Link href="/"  >Back Home!</Link>
            </h2>
        </Layout>
    )
}

export default FirstPost