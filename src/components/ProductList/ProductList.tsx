import { IDataItems } from "@/pages";
import styles from "./ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ items }: IDataItems) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {items &&
          items.map((item) => <ProductItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default ProductList;
