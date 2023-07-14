import Header from "@/components/common/Header/Header";
import { IItem } from "@/types/IItem";
import Image from "next/image";
import styles from "./Product.module.css";

const Product = ({ item }: { item: IItem }) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.images}>
          <img src={item.images[0].path} alt="Диван" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Финка</h1>
          <h2 className={styles.subtitle}>Диван Финка</h2>
          <p className={styles.reviews}>5 отзывов</p>
          <p className={styles.price}>{item.price} р</p>
        </div>
      </div>
    </>
  );
};

export default Product;
