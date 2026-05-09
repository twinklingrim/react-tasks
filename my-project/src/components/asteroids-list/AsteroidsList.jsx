import { AsteroidCard } from "../asteroid-card/AsteroidCard";
import { AsteroidController } from "../../AsteroidController";
import { useState, useEffect } from "react";
import styles from "./AsteroidsList.module.css";

export const AsteroidsList = ({ isOnlyDanger, isKilometers }) => {
  const [allAsteroids, setAllAsteroids] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await AsteroidController.getAsteroids();
      setAllAsteroids(data);
    };
    fetchData();
  }, []);

  const filteredAsteroids = isOnlyDanger ? allAsteroids.filter(item => item.isDangerous) : allAsteroids;

  console.log("Первый астероид в списке:", filteredAsteroids[0]);
  return (
    <div className={styles.list}>
      {filteredAsteroids.map((it, index) => (
        <AsteroidCard 
          key={it.id} 
          {...it}
          isKilometers={isKilometers}
        />
      ))}
    </div>
  );
};