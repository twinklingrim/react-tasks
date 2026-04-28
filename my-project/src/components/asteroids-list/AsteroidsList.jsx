import { AsteroidCard } from "../asteroid-card/AsteroidCard";
import styles from "./AsteroidsList.module.css";

export const AsteroidsList = () => {
  const asteroids = [
    { id: 1, name: "2021 FQ", date: "12 сентября 2021", distance: "7 235 024 км", size: "85 м", isDangerous: false },
    { id: 2, name: "2021 ER", date: "2 ноября 2021", distance: "9 331 775 км", size: "300 м", isDangerous: false },
    { id: 3, name: "2022 QQ", date: "3 марта 2022", distance: "2 866 012 км", size: "850 м", isDangerous: true },
  ];

  return (
    <div className={styles.list}>
      {asteroids.map((it, index) => (
        <AsteroidCard 
          key={it.id}
          {...it} 
          imageType={index === 0 ? "asteroid-mini" : index === asteroids.length - 1 ? "comet" : "stone"}
        />
      ))}
    </div>
  );
};