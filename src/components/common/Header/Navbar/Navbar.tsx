import styles from "./Navbar.module.css";

const Navbar = () => {
  const items: string[] = [
    "Новинки",
    "Акции",
    "Диваны",
    "Кресла",
    "Кровати",
    "Стулья",
    "Столы",
    "Матрасы",
    "Пуфы",
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item}>
            <a className={styles.link} href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
