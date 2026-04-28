import styles from "./AsteroidData.module.css";

export const AsteroidData = ({ name, date, distance, size, imageType }) => {
    return (
        <div className={styles.container} data-image-type={imageType}>
            <div className={styles.dino}></div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                
                <div className={styles.row}>
                    <span className={styles.label}>Дата</span>
                    <div className={styles.dots}></div>
                    <span>{date}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Расстояние</span>
                    <div className={styles.dots}></div>
                    <span>{distance}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Размер</span>
                    <div className={styles.dots}></div>
                    <span>{size}</span>
                </div>
            </div>
        </div>
    );
};