import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Kinco - Kindergarten React NextJs Template</title>
        <link rel="shortcut icon" href="assets/images/Favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/Favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
          rel="stylesheet"
        />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
