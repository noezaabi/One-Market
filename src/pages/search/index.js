import Link from "next/link";
import Header from "../../components/ui/header";
import Card from "../../components/ui/card";

import styles from "./Search.module.css";

const products = [
  {
    name: "bicycle blablalba",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/ec/97/f5ec977b0945beb35a828b1cc69bfe008e104970.jpg?rule=ad-large",
    price: 124,
  },
  {
    name: "wow de ouf bien blablalba",
    img: "https://img.leboncoin.fr/api/v1/lbcpb1/images/f5/ec/97/f5ec977b0945beb35a828b1cc69bfe008e104970.jpg?rule=ad-large",
    price: 233,
  },
];

export default function Search() {
  return (
    <div className={styles.containerSearch}>
      <Header />
      <div className={styles.mainSearch}>
        <div className="font-bold"> Here are the products for“ Bicycles” </div>
        <div className={styles.mosaicSearch}>
          {products.map((e, index) => (
            <Link href="/product/5452547354" key={index}>
              <Card title={e.name} img={e.img} price={e.price} />
            </Link>
          ))}
          <Link href="/product/5452547354">
            <Card title="Bicycle" img="./froyo_pauvre.png" />
          </Link>
          <Card title="Bicycle 2" />
          <Card title="Bicycle 3" />
          <Card title="Bicycle 4" />
          <Card title="Bicycle 5" />
          <Card title="Bicycle 6" />
          <Card title="Bicycle 7" />
          <Card title="Bicycle 8" />
          <Card title="Bicycle 9" />
          <Card title="Bicycle 10" />
          <Card title="Bicycle 11" />
        </div>
      </div>
    </div>
  );
}
