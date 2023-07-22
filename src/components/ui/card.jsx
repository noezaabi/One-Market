import * as React from "react";
import styles from "./Card.module.css";

import { cn } from "../../lib/utils";

const Card = React.forwardRef(
  ({ className, title, img, price, ...props }, ref) => {
    return (
      <div className={styles.mainCard}>
        <img
          className={styles.cardImg}
          src={img ? img : "/froyo_pauvre.png"}
          alt=""
        />
        <div className={styles.cardTitle}>{title ? title : ""}</div>
        <div className={styles.cardPrice}>
          <div>{price ? price : "123"} $USDC</div>
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";

export default Card;
