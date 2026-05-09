import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AsteroidsList } from "../components/asteroids-list/AsteroidsList";
import styles from "./AsteroidsPage.module.css";
import { useState } from "react";
import { AsteroidFilters } from "../components/asteroid-filters/AsteroidFilters";

export const AsteroidsPage = () => {
  const [isOnlyDanger, setIsOnlyDanger] = useState(false);
  const [isKilometers, setIsKilometers] = useState(true);
  return (
    <div className={styles.container}>
      <Header />
      <hr className={styles.line} />
      <main className={styles.content}>
        <AsteroidFilters isOnlyDanger={isOnlyDanger} 
          setIsOnlyDanger={setIsOnlyDanger}
          isKilometers={isKilometers}
          setIsKilometers={setIsKilometers}
        />
        <div className={styles.banner}>
          <img src="/space.png" alt="Космос" />
        </div>
        <AsteroidsList isOnlyDanger={isOnlyDanger} isKilometers={isKilometers}/>
      </main>
      <Footer />
    </div>
  );
};