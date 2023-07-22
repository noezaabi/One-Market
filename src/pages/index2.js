import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Web3Button } from "@web3modal/react";
import { Plus } from "lucide-react";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";
import Header from "../components/ui/header";
import styles from "./Index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const account = useAccount();
  return (
    <main className={styles.containerIndex}>
      <Header />
      <div className={styles.mainIndex}>
        <div className={styles.firstIndex}>
          <div className={styles.leftIndex}>
            <div className={styles.titleIndex}>
              One Chance, trustworthy and decentralized marketplace
            </div>
            <div className={styles.descIndex}>
              One Chance Marketplace delivers a scam-free, bot-free platform,
              ensuring secure and private transactions through Worldcoin and
              Zkbob. Enjoy encrypted negotiations with XMTP, all in a
              decentralized environment.
            </div>
          </div>
          <div className={styles.rightIndex}>
            <img src="/imageLanding.png" alt="" />
          </div>
        </div>
        <div className={styles.secondIndex}>
          <div>Trending categories 🔥</div>
          <div className={styles.categoriesIndex}></div>
        </div>
      </div>
      <div className="flex w-screen px-14 py-6 justify-between border-b-2">
        <h1 className={`text-3xl font-bold `}> One Market </h1>
        <div className="flex w-1/2  items-center space-x-2 ">
          <Input type="email" placeholder="Email" />
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Web3Button />
      </div>
    </main>
  );
}
