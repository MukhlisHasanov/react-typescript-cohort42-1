import { InputComponent, InputLabel, InputWrapper } from "./styles";
import { InputProps } from "./types";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        disabled={disabled}
        error={error}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      ></InputComponent>
    </InputWrapper>
  );
}

export default Input;
