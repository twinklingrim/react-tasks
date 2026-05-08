import { AsteroidCard } from "../asteroid-card/AsteroidCard";
import styles from "./AsteroidsList.module.css";
import { AsteroidController } from "../../AsteroidController";

export const AsteroidsList = ({ isOnlyDanger, isKilometers }) => {
  const controller = new AsteroidController();
  const allAsteroids = controller.getAsteroids() || [];
  const filteredAsteroids = isOnlyDanger ? allAsteroids.filter(item => item.isDangerous) : allAsteroids;

  return (
    <div className={styles.list}>
      {filteredAsteroids.map((it, index) => (
        <AsteroidCard 
          key={it.id}
          {...it} 
          isKilometers={isKilometers}
          imageType={index === 0 ? "mini" : index === filteredAsteroids.length - 1 ? "comet" : "stone"}
        />
      ))}
    </div>
  );
};