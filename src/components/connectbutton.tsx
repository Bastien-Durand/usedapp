import { useEthers } from "@usedapp/core";

export const ConnectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  // 'account' being undefined means that we are not connected.
  if (account) return <button onClick={() => deactivate()}>Disconnect</button>;
  else return <button onClick={() => activateBrowserWallet()}>Connect</button>;
};
