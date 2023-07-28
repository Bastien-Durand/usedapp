import { Mainnet, DAppProvider, Config, Goerli } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import { render } from "react-dom";
import App from "./App";

const config: Config =
  {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider("mainnet"),
      [Goerli.chainId]: getDefaultProvider("goerli"),
    },
  } || {};

export default config;

render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>,
  document.getElementById("root")
);
