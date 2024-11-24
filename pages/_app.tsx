import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (loader) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    }

    const timer = setTimeout(() => {
      setLoader(false);
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, [loader]);

  return (
    <Fragment>
      <Head>
        <title>Kinco - Kindergarten React NextJs Template</title>
      </Head>
      {loader ? (
        <PreLoader />
      ) : (
        <Component {...pageProps} />
      )}
    </Fragment>
  );
};

export default App;
