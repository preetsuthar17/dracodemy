import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css"
        />{" "}
        <meta name="google-adsense-account" content="ca-pub-2501084062179551" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
