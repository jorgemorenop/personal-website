import '../styles/globals.css'

import Head from 'next/head'
import Navbar from '../components/Navbar';


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Jorge Moreno - Freelance Data & Cloud projects</title>
            </Head>
            <Navbar/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
