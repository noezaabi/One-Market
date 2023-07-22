import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Web3Button } from "@web3modal/react";
import { Plus } from "lucide-react";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const account = useAccount();
  return (
    <main className={`flex min-h-screen flex-col`}>
      <div className="flex w-screen px-14 py-6 justify-between border-b-2">
        <h1 className={`text-3xl font-bold `}>One Market</h1>
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
