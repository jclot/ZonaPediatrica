// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="assets/images/Favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/Favicon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
