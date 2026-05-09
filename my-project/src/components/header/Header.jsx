import styles from "./Header.module.css";
import { NavLink } from "react-router";

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
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Астероиды
          </NavLink>

          <NavLink to="/destroyment" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
            Уничтожение
          </NavLink>
        </nav>
      </div>
    </header>
  );
};