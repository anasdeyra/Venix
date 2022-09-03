import { AppShell as A } from "@mantine/core";
import React from "react";
import dynamic from "next/dynamic";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { MantineProvider } from "@mantine/core";
import theme from "../../theme";
import { NextComponentType, NextPageContext } from "next";
import { Global } from "@emotion/react";
import bgImage from "../../public/bg.jpg";

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};

export default function AppShell({ Component, pageProps }: Props) {
  const Navbar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });
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
        <A
          styles={{
            root: {
              backgroundImage: `url(${bgImage.src})`,
              backgroundSize: "fill",
            },
          }}
          header={<Navbar />}
        >
          <Component {...pageProps} />
        </A>
      </MantineProvider>
    </ThirdwebProvider>
  );
}
