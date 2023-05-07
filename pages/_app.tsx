import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from '../styles/App.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
    <Head>
      <title key="title">Next JS News App</title>
      <meta key="description" name="description" content="NextJS crash course by coding in flow" />
      <meta name="keywords" content="NextJS, React, News" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={`px-4 ${styles.pageContainer}`}>
        <Component {...pageProps} />
    </div>
      </div>
  )
}
