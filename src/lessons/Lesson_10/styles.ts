import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 80px;
  flex-direction: column;

`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;