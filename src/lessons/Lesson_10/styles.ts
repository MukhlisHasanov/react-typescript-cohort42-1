import styled from "@emotion/styled";

export const Div01 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  margin: 0;
  min-height: 100vh;
`;

export const LabelCountry = styled.label`
  color: green;
  text-align: center;
  font-size: 72px;
  font-weight: bold;
  padding-bottom: 60px;

  input {
    margin: 25px;
    padding: 10px ;
    font-size: 15px;
    border: 2px solid white;
    border-radius: 50px;
    width: 60vw;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)

  }

  input::placeholder {
    color: gray;

  }
`;

export const Position = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonPosition = styled.div`
width: 200px;
height: 60%;
  
`;

export const InputPosition = styled.div`
width: 600px;
padding-right: 30px;
position: relative;
right: 100px;
`;

export const Div02 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Div03 = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(1, 1, 1, 1.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.35);
  }
`;
