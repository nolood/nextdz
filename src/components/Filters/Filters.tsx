import styles from "./Filters.module.css";

const Filters = () => {
  const items: string[] = [
    "Все фильтры",
    "Цена",
    "Размер",
    "Тип ткани",
    "Наполнение",
    "Модель дивана",
  ];
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.group}>
        <p className={styles.text}>Механизмы</p>
        <p className={styles.text}>Самые популярные</p>
      </div>
    </div>
  );
};

export default Filters;
