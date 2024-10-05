import styled from "@emotion/styled";


export const Div01 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: white;
  min-height: 100vh;
`;


export const LabelCountry = styled.label`
display: flex;
  font-size: 18px;
  width: 85vw;
  color: green;
  margin-bottom: 15px;
  padding-bottom: 50%;
  padding: 10px;
  background-color: yellow;

  input {
    margin-left: 10px;
    padding: 10px;
    font-size: 15px;
    border: 2px solid violet;
    border-radius: 5px;
    width: 60vw;
    background-color: red;
  }

  input::placeholder {
    color: gray;
  }
`;


export const Div02 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;

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

  h3 {
    font-size: 10px;
    color: black;
  }

  p {
    font-size: 16px;
    color: blue;
  }

  a {
    color: red;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.35);
  }
`;


