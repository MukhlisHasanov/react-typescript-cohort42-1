import styled from "@emotion/styled";


export const Div01 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: white;
  min-height: 100vh;
`;


export const LabelCountry = styled.label`


  
  color: green;
  display: inline-block;
  text-align: center;
  
  
 

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

export const ButtonPosition = styled.button`
position: relative; 
margin: auto;
border-radius: 10px;

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
    transform: scale(1.35);
    box-shadow: 0px 25px 50px rgb(255, 255, 0);
  }
`;
 export const Div05 = styled.div`
 
 display: flex;
  flex-direction: row;
 
 `



