import { AppShell as A } from "@mantine/core";
import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { MantineProvider } from "@mantine/core";
import theme from "../../theme";
import { NextComponentType, NextPageContext } from "next";

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};
import Navbar from "./Navbar/Navbar";

export default function AppShell({ Component, pageProps }: Props) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      autoConnect={false}
      supportedChains={[ChainId.Rinkeby, ChainId.Mainnet, ChainId.Polygon]}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <A header={<Navbar />}>
          <Component {...pageProps} />
        </A>
        ;
      </MantineProvider>
    </ThirdwebProvider>
  );
}
