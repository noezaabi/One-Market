import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Web3Button } from "@web3modal/react";
import { Plus } from "lucide-react";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";
import Header from "../components/ui/header";
import Accordeons from "../components/ui/accordeons";
import styles from "./Index.module.css";

const inter = Inter({ subsets: ["latin"] });

const categ = [
  { name: "Clothes", img: "/vetements.jpg" },
  {
    name: "Furnitures",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/ec/97/f5ec977b0945beb35a828b1cc69bfe008e104970.jpg?rule=ad-large",
  },
  { name: "Cars", img: "/cars.jpeg" },
];

const questions = [
  {
    question: "What is the difference with a normal marketplace?",
    answer:
      "The main benefits of one chance marketplace over the average Marketplace is that it is bot free and scammer free thanks to worldcoin. The Worldcoin sign in that we implemented in our marketplace assure you that no bot can be present on the app so it prevents from scalping bots. Also which one of you have never been scammed on a marketplace ? You know when you order something and it never arrives or it’s an imitation With one chance Marketplace this can not happen. If you get caught scamming your worldcoin account is banned and you cannot access the marketplace anymore because you will need a new Worldcoin account which is impossible to recreate thanks to proof of personhood.",
  },
  {
    question: "What happen when a scammer gets caught?",
    answer:
      "We send him a warning called strike once you get 3 strikes you are definitively banned from the marketplace.",
  },
  {
    question: "How can I pay on the marketplace?",
    answer:
      "You can pay using your crypto wallet either Walletconnect or Metamask on several blockchains.",
  },
];

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
          <div className={styles.categoriesIndex}>
            {categ.map((e) => (
              <div>
                <img src={e.img} alt="" />
                <div>{e.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Accordeons questions={questions} />
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
