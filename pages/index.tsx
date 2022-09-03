import Hero from "../components/Pages/Home/Hero";
import { Box } from "@mantine/core";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function IndexPage() {
  return (
    <Box mt={72}>
      <Hero />
    </Box>
  );
}
