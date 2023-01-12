import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
            <link href="https://fonts.googleapis.com/css2?family=Moon+Dance&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"/>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Moon+Dance&display=swap" rel="stylesheet"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
