import {
  useAddress,
  useDisconnect,
  useUser,
  useLogout,
  useMetamask,
  useBalance,
  useLogin,
} from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();
  const login = useLogin();

  const logout = useLogout();
  const { user, isLoading } = useUser();
  const { data } = useBalance();

  return (
    <div>
      <pre>my balance: {data?.displayValue}</pre>
      <button
        onClick={() => {
          connect();
        }}
      >
        connect
      </button>
      <button
        onClick={() => {
          login();
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          disconnect().then(() => {
            logout();
          });
        }}
      >
        disconnect
      </button>

      <p>Your address: {address}</p>
      <pre>User: {JSON.stringify(user || null)}</pre>
    </div>
  );
}
