import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 30px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 8px;
  overflow: hidden;
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