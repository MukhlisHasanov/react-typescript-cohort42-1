
import "./styles.css";
import ButtonProps from "./types";


function Button({ type = "button", name, onClick }: ButtonProps) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
