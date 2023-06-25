import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import { useEffect } from 'react';
import sal from 'sal.js';

export default function Document() {

  return (
    <Html lang="ru" data-bs-theme="dark">
      <Head>
        <title>MEDIAHATE - союз артистов, лейбл</title>
        <meta name="description" content="Mediahate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="MEDIAHATE"/>
        <meta property="og:description" content="MEDIAHATE - союз артистов, лейбл"/>
        <meta property="og:url" content="https://mediahate.fleetyfox.online/"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@300;400;700;900&family=Rubik+Glitch&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/third/sal-0.8.5/dist/sal.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
