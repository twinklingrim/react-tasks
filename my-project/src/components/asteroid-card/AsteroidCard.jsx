import { AsteroidAction } from "./AsteroidAction";
import { AsteroidData } from "./AsteroidData";
import styles from "./AsteroidCard.module.css";
import { Link } from "react-router";

export const AsteroidCard = (props) => {
    const { id, name, date, distance, size, isDangerous, imageMode, isKilometers } = props;
    const containerClass = `${styles.container} ${isDangerous ? styles.dangerous : styles.safe}`;

    return (
        <Link to={`/asteroids/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={containerClass}>
                <AsteroidData 
                    name={name}
                    date={date} 
                    distance={distance} 
                    size={size} 
                    imageType={imageMode} 
                    isKilometers={isKilometers} 
                />
                <AsteroidAction isDangerous={isDangerous} asteroid={props} />
            </div> 
        </Link>
    );
};