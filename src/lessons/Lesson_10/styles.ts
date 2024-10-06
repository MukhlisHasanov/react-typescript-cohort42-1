import styled from "@emotion/styled";


export const Div01 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
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

export const ButtenV = styled.button`
 background-color: blue;
 width: 200px;
 height: 50px;
  color: white;
  text-align: center;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
   
   position: fixed;
  top: 20px;  
  right: 20px;  

  &:hover {
    background-color: green;
    box-shadow: 0 6px 12px rgba(0, 123, 255, 1.4); 
  }


  &:active {
    transform: scale(1);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);  
  }
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




