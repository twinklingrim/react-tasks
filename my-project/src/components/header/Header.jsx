import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>ARMAGGEDON V</h1>
          <p className={styles.description}>
            Сервис мониторинга и уничтожения астероидов,<br />
            опасно подлетающих к Земле.
          </p>
        </div>
        
        <nav className={styles.nav}>
          <span className={styles.activeLink}>Астероиды</span>
          <span className={styles.link}>Уничтожение</span>
        </nav>
      </div>
    </header>
  );
};