

import styled from "@emotion/styled";


export const PageWrapper = styled.div`

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: black;
  min-height: 100vh;`


export const Card = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 600px;
min-height: 400px;
padding: 30px;
border: 1px solid black;
border-radius: 10px;
background-color: white;`

export const Text = styled.p`
font-size: 20px;
color: black;
;`

export const Div03 = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(1, 1, 1, 1.1);
  transition: transform 0.3s ease-in-out;

  h3 {
    font-size: 20px;
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
    transform: scale(1.65);
  }

`;
export const LabelCountry = styled.label`
  font-size: 18px;
  color: green;
  margin-bottom: 15px;
  background-color: yellow;

  input {
    margin-left: 10px;
    padding: 8px;
    font-size: 16px;
    border: 2px solid violet;
    border-radius: 5px;
    width: 300px;
    background-color: red;
  }

  input::placeholder {
    color: #999;
    
  }
`;