import {
  useMetamask,
  useCoinbaseWallet,
  useDisconnect,
  useNetwork,
  useNetworkMismatch,
  ConnectWallet,
} from "@thirdweb-dev/react";

export default function ConnectButton() {
  return <ConnectWallet />;
}
