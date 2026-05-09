export class AsteroidController {

    static async getAsteroids() {
        const response = await fetch("https://neows-proxy.vercel.app/api/asteroids");
        const data = await response.json();

        const dateKey = Object.keys(data.near_earth_objects)[0];

        return data.near_earth_objects[dateKey].map(AsteroidController.mapAsteroid);
    }

    static mapAsteroid(asteroid) {
        return {
            id: asteroid.id,
            name: asteroid.name,
            isDangerous: asteroid.is_potentially_hazardous_asteroid,
            distance: {
                kilometers: Math.round(asteroid.close_approach_data?.[0]?.miss_distance?.kilometers || 0),
                lunar: Math.round(asteroid.close_approach_data?.[0]?.miss_distance?.lunar || 0)
            },
            size: Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max) + " м",
            date: asteroid.close_approach_data?.[0]?.close_approach_date || null
        };
    }

    static async getAsteroidById(id) {
        if (!id) return null;
        const response = await fetch(`https://neows-proxy.vercel.app/api/asteroids/${id}`);
        const data = await response.json();

        return AsteroidController.mapAsteroidById(data);
    }

    static mapAsteroidById(asteroid) {
        return {
            id: asteroid.id,
            name: asteroid.name,
            isDangerous: asteroid.is_potentially_hazardous_asteroid,
            size: Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max) + " м",
            allApproaches: asteroid.close_approach_data || []
        };
    }

static mapAsteroid(asteroid) {
    const diameter = Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max);
    let imageMode = "stone";

    if (diameter < 100) {
        imageMode = "mini";
    } else if (diameter > 500) {
        imageMode = "comet";
    }

    return {
        id: asteroid.id,
        name: asteroid.name,
        isDangerous: asteroid.is_potentially_hazardous_asteroid,
        date: asteroid.close_approach_data?.[0]?.close_approach_date || null,
        size: diameter + " м",
        diameter: diameter,
        distance: {
            kilometers: Math.round(asteroid.close_approach_data?.[0]?.miss_distance?.kilometers || 0),
            lunar: Math.round(asteroid.close_approach_data?.[0]?.miss_distance?.lunar || 0)
        },
        imageMode: imageMode 
    };
}
}

const asteroids = [
  {
    id: 1,
    name: "2021 FQ",
    date: "12 сентября 2021",
    distance: {
      kilometers: "7 235 024",
      lunar: "19"
    },
    size: "85 м",
    isDangerous: false
  },
  {
    id: 2,
    name: "2021 ER",
    date: "2 ноября 2021",
    distance: {
      kilometers: "9 331 775",
      lunar: "24"
    },
    size: "300 м",
    isDangerous: false
  },
  {
    id: 3,
    name: "2022 QQ",
    date: "3 марта 2022",
    distance: {
      kilometers: "2 866 012",
      lunar: "7"
    },
    size: "850 м",
    isDangerous: true
  }
];