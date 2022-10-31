import { withTRPC } from "@trpc/next";
import { AppProps } from "next/app";
import Head from "next/head";
import icon from "../../public/favicon.svg";
import AppShell from "../components/AppShell/AppShell";
import { AppRouter } from "./api/trpc/[trpc]";

export function _App(props: AppProps) {
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

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";
    return {
      url,
    };
  },

  ssr: true,
})(_App);
