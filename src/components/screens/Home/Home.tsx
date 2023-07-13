import Filters from "@/components/Filters/Filters";
import Header from "@/components/common/Header/Header";
import styles from "./Home.module.css";
import { IDataItems } from "@/pages";
import ProductList from "@/components/ProductList/ProductList";

const Home = ({ items }: IDataItems) => {
  return (
    <>
      <Header />
      <h1 className={styles.title}>Диваны</h1>
      <Filters />
      <ProductList items={items} />
    </>
  );
};

export default Home;
