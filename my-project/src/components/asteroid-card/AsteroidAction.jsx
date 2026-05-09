import styles from "./AsteroidAction.module.css";
import { useAction } from "../../ActionContext";

export const AsteroidAction = ({ isDangerous, asteroid }) => {
  const { addToBasket } = useAction();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToBasket(asteroid);
  };


  return (
    <div className={styles.container}>
      <div>Оценка:</div>
      <div className={styles.status}>
        <strong>{isDangerous ? "Опасен" : "Не опасен"}</strong>
      </div>
      <button className={styles.button}>На уничтожение</button>
    </div>
  );
};