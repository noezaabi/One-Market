import Link from "next/link";
import { useAccount, useContract } from "wagmi";

import Header from "../../components/ui/header";
import Card from "../../components/ui/card";

import styles from "./Account.module.css";

export default function Account() {
  const { address, isConnecting, isDisconnected } = useAccount();
  console.log(address);
  return (
    <div className={styles.containerAccount}>
      <Header />
      <div className={styles.mainAccount}>
        <div className={styles.leftAccount}>
          <div className={styles.divImgAccount}>
            <div>
              <img src="/nouns.png" alt="" className={styles.imgAccount} />
            </div>
            <div className={styles.nameAccount}>
              {address &&
                address.substring(0, 5) +
                  "..." +
                  address.substring(address.length - 3)}
            </div>
          </div>
          <div className={styles.msgAccount}>Messages</div>
          <div className={styles.settingAccount}>Setting</div>
          <div className={styles.sellAccount}>Sell a product</div>
        </div>
        <div className={styles.rightAccount}>
          <div>
            <div className={styles.nameCategAccount}>Last products boughts</div>
            <div className={styles.carouselAccount}>
              <div>
                <Link href="/product/76258">
                  <Card title="Very very cool bike" />
                </Link>
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
              </div>
            </div>
            <div className={styles.nameCategAccount}>Last products seen</div>
            <div className={styles.carouselAccount}>
              <div>
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
                <Card title="Very very cool bike" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
