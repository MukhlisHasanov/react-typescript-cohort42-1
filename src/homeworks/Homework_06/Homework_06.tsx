import "./styles.css";
import Card from "components/Card/Card";
import { v4 } from "uuid";
import { ReactNode } from "react";

function Homework_06() {
  interface Cars {
    brand: string;
    price: number;
    isDiesel: boolean;
  }

  const cars: Cars[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porsche", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList: ReactNode = cars.map((car: Cars) => {
    const carId: string = v4();

    return (
      <Card
        key={carId}
        brand={car.brand}
        price={car.price}
        isDiesel={car.isDiesel}
      />
    );
  });

  return <div className="homework06-wrapper">{carList}</div>;
}
export default Homework_06;
