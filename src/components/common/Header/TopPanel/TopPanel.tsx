import Link from "next/link";
import styles from "./TopPanel.module.css";

const TopPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Yorcom
        </Link>
        <input
          className={styles.search}
          type="text"
          placeholder="Найти мебель"
        />
      </div>
      <div className={styles.container}>
        <p className={styles.town}>Челябинск</p>
        <p className={styles.phone}>+7 (900) 0920-80-86</p>
      </div>
    </div>
  );
};

export default TopPanel;
