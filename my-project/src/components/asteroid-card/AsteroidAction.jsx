import { useAction } from "../../ActionContext";
import styles from "./AsteroidAction.module.css";
export const AsteroidAction = ({ isDangerous, asteroid }) => {
    const { addToBasket } = useAction();

    const handleAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();

        addToBasket(asteroid);
    };

    return (
        <div className={styles.container}>
            <div>Оценка:</div>
            <div style={{ fontWeight: 'bold' }}>
                {isDangerous ? 'Опасен' : 'Не опасен'}
            </div>
            <button className={styles.button} onClick={handleAdd}>
                На уничтожение
            </button>
        </div>
    );
};