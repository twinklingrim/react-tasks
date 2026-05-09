import { useParams } from "react-router";
import { Header } from "../components/header/Header";
import { useEffect, useState } from "react";
import { AsteroidController } from "../AsteroidController";
import styles from "./AsteroidPage.module.css";

export const AsteroidPage = () => {
  const { id } = useParams();
  const [asteroid, setAsteroid] = useState(null);

  useEffect(() => {
    console.log("ID из URL:", id);
    const loadAsteroid = async () => {
    const data = await AsteroidController.getAsteroidById(id);
    console.log("Данные от контроллера:", data);
    setAsteroid(data);
    };
    loadAsteroid();
  }, [id]);

  if (!asteroid) {
    return <div className={styles.loading}>Загрузка данных об астероиде...</div>;
  }

  return (
    <div className={styles.container}>
        <Header />
      <h1 className={styles.header}>Астероид: {asteroid.name}</h1>
      
      <div className={styles.infoCard}>
        <p><strong>ID:</strong> {asteroid.id}</p>
        <p><strong>Размер (макс.):</strong> {asteroid.size}</p>
        <p>
          <strong>Статус:</strong>{" "}
          <span className={asteroid.isDangerous ? styles.danger : styles.safe}>
            {asteroid.isDangerous ? "⚠️ Потенциально опасен" : "✅ Не представляет угрозы"}
          </span>
        </p>
      </div>

      <h2>История сближений с Землей</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Скорость</th>
            <th>Расстояние</th>
            <th>Орбита</th>
          </tr>
        </thead>
        <tbody>
          {asteroid.allApproaches.map((approach, index) => (
            <tr key={index}>
              <td>{approach.close_approach_date}</td>
              <td>
                {Math.round(approach.relative_velocity.kilometers_per_hour).toLocaleString()} км/ч
              </td>
              <td>
                {Math.round(approach.miss_distance.kilometers).toLocaleString()} км
              </td>
              <td>{approach.orbiting_body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};