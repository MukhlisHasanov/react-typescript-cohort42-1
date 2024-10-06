import styled from "@emotion/styled";

export const PageWrapper = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: #000066;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden; 

`;

export const LabelCountry = styled.label`
 color: white;
  display: inline-block;
  text-align: center;
  width: 100%;
  
  box-sizing: border-box;

  input {
    margin: 25px;
    padding: 10px ;
    font-size: 50px;
    border: 2px solid white;
    border-radius: 50px;
    width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
  }
  input::placeholder {
    color: gray;
  }
`;

export const Position = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const ButtonPosition = styled.div`
 width: 100%;
  padding: 0;
  margin-bottom: 20px;
  box-sizing: border-box;
  
`;

export const InputPosition = styled.div`
width: 100%;
padding: 0;
margin-bottom: 20px;
`;

export const Div02 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  width: 92%;
  padding: 0;
  
  cursor: pointer;

  @media (max-width: 1px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Div03 = styled.div`
   background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(1, 1, 1, 1.1);
  transition: transform 0.3s ease-in-out;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    transform: scale(1.25);
  }
`;