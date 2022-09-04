import { AppProps } from "next/app";
import Head from "next/head";
import icon from "../../public/favicon.svg";
import AppShell from "../components/AppShell/AppShell";

export default function _App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Venix</title>
        <link rel="shortcut icon" href={icon.src} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppShell Component={Component} pageProps={pageProps} />
    </>
  );
}
