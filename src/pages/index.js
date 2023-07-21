import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Button, Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, useAccount, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];
const projectId = "c44e93f1cfc8edec6ca7f7f8b119da5d";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <WagmiConfig config={wagmiConfig}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </main>
  );
}

const HomePage = () => {
  const account = useAccount();
  return (
    <div className="flex flex-col items-center justify-center">
      {account && account.isConnected ? (
        <div>
          <h1 className={`text-4xl font-bold`}>{account.address}</h1>
        </div>
      ) : (
        <div>
          <h1 className={`text-4xl font-bold`}>Please Connect</h1>
        </div>
      )}
      <Web3Button />
    </div>
  );
};
