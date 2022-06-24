import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Please check this website if you unsure when the KKN ends"
        />
        <meta name="author" content="Dian Rahmaji" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Please check this website if you are unsure when the KKN ends"
        />
        <meta name="twitter:title" content="Kapan KKN Selesai?" />
        <meta name="twitter:site" content="@dianrahmaji" />
        <meta
          name="twitter:image:src"
          content="https://countdown-kkn.vercel.app/twitter_card.jpg"
        />
        <meta name="twitter:creator" content="@dianrahmaji" />

        <meta
          property="og:site_name"
          content="KKN Countdown Periode 2 Tahun 2021"
        />
        <meta property="og:title" content="Kapan KKN Selesai?" />
        <meta
          property="og:description"
          content="Please check this website if you are unsure when the KKN ends"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://countdown-kkn.vercel.app/twitter_card.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Kapan KKN Selesai?</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
