import { IItem } from "@/types/IItem";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductItem.module.css";

const ProductItem = ({ item }: { item: IItem }) => {
  const href = `/product/${item.id}`;
  return (
    <div>
      <Image
        width={300}
        height={250}
        src={item.images[0].path}
        alt={item.updated_at}
      />
      <p className={styles.text}>{item.price}р</p>
      <Link className={styles.link} href={href}>
        Посмотреть
      </Link>
    </div>
  );
};

export default ProductItem;
