import styled from "@emotion/styled";
import { colors } from "styles/colors";

interface ButtonComponentStyleProps {
  $isDeleteVariant: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: 1px;
  width: 100%;
  height: 100%;
  border: 1px;
  background-color: ${({ $isDeleteVariant, disabled }) => {
    if (disabled) {
      return colors.DISABLED;
    } else {
      if ($isDeleteVariant) {
        return colors.ERROR;
      } else {
        return colors.PRIMARY_BLUE;
      }
    }
  }};
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: green;
    box-shadow: 0 6px 12px rgba(0, 123, 255, 1.4);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  }
`;
