import styled from "@emotion/styled";
import { colors } from "styles/colors";

interface ButtonComponentStyleProps {
  $isDeleteVariant: boolean;
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: none;
  width: 100%;
  height: 70px;
  border: none;
  background-color: ${({ disabled, $isDeleteVariant }) =>
    disabled
      ? colors.DISABLED
      : $isDeleteVariant
      ? colors.ERROR
      : colors.PRIMARY_BLUE};
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;
