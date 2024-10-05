import { ButtonComponent } from "./styles";
import ButtonProps from "./types";

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isDeleteVariant={isDeleteVariant}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
