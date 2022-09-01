import { Header, Skeleton } from "@mantine/core";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Navbar() {
  const ConnectButton = dynamic(
    () => import("../../ConnectButton/ConnectButton"),
    { ssr: false }
  );

  return (
    <Header height={60}>
      <Suspense fallback={<Skeleton width={100} height={50} />}>
        <ConnectButton />
      </Suspense>
    </Header>
  );
}
