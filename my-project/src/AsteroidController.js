export class AsteroidController {
  getAsteroids() {
    return [
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
      },
    ];
  }
}