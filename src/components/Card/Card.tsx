import "./styles.css";

interface CardProps {
  brand: string;
  price: number;
  isDiesel: boolean;
}

function Card({ brand, price, isDiesel }: CardProps) {
  return (
    <div className="card-wrapper">
      <p className="card-item">Brand: {brand} </p>
      <p className="card-item">Price: {price}</p>
      <p className="card-item">isDiesel: {isDiesel ? "Yes" : "No"}</p>
    </div>
  );
}

export default Card;
