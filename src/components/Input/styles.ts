import styled from "@emotion/styled";
import { colors } from "styles/colors";

interface InputComponentStyleProps {
  $error: undefined | string;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentStyleProps>`
  width: 100%;
  height: 50px;
  background-color: ${({ disabled }) =>
    disabled ? colors.DISABLED : colors.NORMAL};
  border: ${({ $error, disabled }) => {
    if (disabled) {
      return `1px solid ${colors.DISABLED}`;
    } else {
      if ($error !== undefined) {
        return `2px solid ${colors.ERROR}`;
      } else {
        return `1px solid ${colors.NORMAL}`;
      }
    }
  }};

  border-radius: 4px;
  padding: 10px;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: gray;
    font-size: 16px;
  }
`;
