import styled from "@emotion/styled";

interface ButtonComponentStyleProps {
  $isDeleteVariant: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
 outline: none;
  width: 100%;
  height: 70px;
  border: none;
  background-color: ${({$isDeleteVariant}) => $isDeleteVariant ? "red" : '#1F27F5'} ;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`
