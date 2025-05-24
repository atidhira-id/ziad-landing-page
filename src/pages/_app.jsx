/* eslint-disable react/jsx-props-no-spreading */
import "@/styles/index.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ZIAD Smart</title>
        <link rel="icon" href="./images/logo-ziad.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
