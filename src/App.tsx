import Navbar from "./components/AppShell/Navbar/Navbar";
import bgImage from "./public/bg.jpg";
import { AppShell as A } from "@mantine/core";
import { NextComponentType, NextPageContext } from "next";
import { useModals } from "@mantine/modals";
import { useUser } from "@thirdweb-dev/react";
import { useEffect } from "react";
export default function App({ Component, pageProps }: Props) {
  const { openContextModal } = useModals();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (isLoading) return;
    if (user) return;
    openContextModal("signIn", { innerProps: {}, title: "signature required" });
  }, [isLoading]);
  return (
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
  );
}

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};
