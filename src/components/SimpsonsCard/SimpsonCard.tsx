import "./styles.css";
import { SimpsonCardProps } from "./data";
import "./data";

function SimponsCard({
  firstName,
  lastName,
  avatar,
  job,
  hobby = "No Hobby",
}: SimpsonCardProps) {
  const getSimpsonName = (): string => {
    return `${firstName} ${lastName}`;
  };

  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name: {getSimpsonName()} </p>
      <p className="card-item">Job: {job}</p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimponsCard;
