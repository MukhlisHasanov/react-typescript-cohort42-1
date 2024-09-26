export type ButtonTypes = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  type?: ButtonTypes;
  name: string;
  onClick: () => void;
}

export default ButtonProps;