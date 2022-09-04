import { Button } from "@mantine/core";
import {
  useNetwork,
  useNetworkMismatch,
  useUser,
  useDesiredChainId,
  ChainId,
} from "@thirdweb-dev/react";
import { useEffect } from "react";

export default function ConnectWallet() {
  const _desiredChain = useDesiredChainId();
  const [, switchNewtwork] = useNetwork();
  const { user } = useUser();
  const isMismatched = useNetworkMismatch();

  useEffect(() => {
    isMismatched && switchNewtwork?.(_desiredChain);
  }, []);

  return <Button>Connect</Button>;
}
