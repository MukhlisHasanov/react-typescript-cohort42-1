import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Section from "lessons/Lesson_13/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
import { UserData } from "./types";

//  1 step: create context throw useContext
// Context is database, which one we want to sent to low (down) level
export const MainContext = createContext<UserData | undefined>({
  fullName: "",
  age: 0,
  jobPosition: "",
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };

    setUserData(userResponse);
  };

  return (

    // 2 step: cover all return code with MainContext.Provider and send what we want to value
    <MainContext.Provider value={userData}>
    <MainWrapper>
      <MainTitle>Main Component</MainTitle>
      <Button name="Get User Data" onClick={getUserData} />
      <Section />
    </MainWrapper>
    </ MainContext.Provider>
  );
}

export default Main;
