import Card from "@/components/ui/card";

import styles from "./Account.module.css";

export default function Account() {
  return (
    <div className={styles.containerAccount}>
      <div className={styles.header}>Header here</div>
      <div className={styles.mainAccount}>
        <div className={styles.leftAccount}>
            <div className={styles.divImgAccount}>
                <img src="/froyo_pauvre.png" alt="" className={styles.imgAccount}/>
                <div className={styles.nameAccount}>David.eth</div>
            </div>
            <div className={styles.msgAccount}>Messages</div>
            <div className={styles.settingAccount}>Setting</div>
            <div className={styles.sellAccount}>Sell a product</div>
        </div>
        <div className={styles.rightAccount}>
            <div>
                <div className={styles.nameCategAccount}>Last products boughts</div>
                <div className={styles.carouselAccount}>
                    <div >
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                    </div>
                </div>
                <div className={styles.nameCategAccount}>Last products seen</div>
                <div className={styles.carouselAccount}>
                    <div >
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                        <Card title="Very very cool bike"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
