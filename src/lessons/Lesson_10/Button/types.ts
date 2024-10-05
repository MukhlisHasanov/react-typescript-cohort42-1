export type ButtonTypes = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  type?: ButtonTypes;
  name: string;
  onClick?: () => void;
  isDeleteVariant?: boolean;
  disabled?: boolean;
}

export default ButtonProps;
