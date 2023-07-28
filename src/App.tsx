import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { ConnectButton } from "./components/connectbutton";
import config from "./index";

const App = () => {
  const { account, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);
  if (chainId && config.readOnlyUrls && !config.readOnlyUrls[chainId]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>;
  }

  return (
    <div>
      <ConnectButton />
      {etherBalance && (
        <div className="balance">
          <br />
          Address:
          <p className="bold">{account}</p>
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
        </div>
      )}
    </div>
  );
};

export default App;
