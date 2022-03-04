import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import '../styles/app.scss';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
  router,
}: AppProps) => {
  return (
    <>

      <AnimatePresence exitBeforeEnter>
        <Head>
          <meta
            name="viewport"
            content="width=device-width initial-scale=1.0"
          />
        </Head>

          <a href="/fr" className="flag">Fr</a>
          <span className="flag" >|</span>
          <a href="/" className="flag" >En</a>

        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
};

export default App;

// <Link href="/fr" locale="fr">
//     <a className="flag">Fr</a>
// </Link>
