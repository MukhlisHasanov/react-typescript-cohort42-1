import { ButtonComponent } from "./styles";
import ButtonProps from "./types";

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
}: ButtonProps) {
  return (
    <ButtonComponent $isDeleteVariant={isDeleteVariant} onClick={onClick} type={type}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
