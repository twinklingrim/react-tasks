import { AsteroidAction } from "./AsteroidAction"
import { AsteroidData } from "./AsteroidData"
import styles from "./AsteroidCard.module.css"

export const AsteroidCard = ({ name, date, distance, size, isDangerous, imageType}) => {
    const containerClass = `${styles.container} ${isDangerous ? styles.dangerous : styles.safe}`;

    return (
        <div className={containerClass}>
            <AsteroidData 
                name={name} 
                date={date} 
                distance={distance} 
                size={size} 
                imageType={imageType} 
            />
            <AsteroidAction isDangerous={isDangerous} />
        </div>
    )
}