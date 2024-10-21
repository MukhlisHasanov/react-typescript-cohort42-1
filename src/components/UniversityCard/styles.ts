import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  gap: 30px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 8px;
`;

export const FirstString = styled.h3`
  font-size: 20px;
  color: black;
`;

export const SecondString = styled.p`
  font-size: 16px;
  color: blue;
`;
export const ThrirdString = styled.a`
  color: red;
  text-decoration: none;
`;
