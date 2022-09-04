import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { MantineProvider } from "@mantine/core";
import theme from "../../theme";
import { NextComponentType, NextPageContext } from "next";
import { Global } from "@emotion/react";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";

import SignInModal from "../Modals/SignInModal";
import App from "../../App";

export default function AppShell({ Component, pageProps }: Props) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      supportedChains={[ChainId.Rinkeby, ChainId.Mainnet, ChainId.Polygon]}
      authConfig={{
        domain: "localhost:3000",
        authUrl: "/api/auth",
        loginRedirect: "/api/connect",
      }}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Global
          styles={[
            "@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap')",
          ]}
        />

        <NotificationsProvider>
          <ModalsProvider modals={{ signIn: SignInModal }}>
            <App Component={Component} pageProps={pageProps} />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ThirdwebProvider>
  );
}

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};
