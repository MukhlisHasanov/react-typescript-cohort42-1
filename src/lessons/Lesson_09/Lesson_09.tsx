import { useEffect, useState } from "react";
import { FormElementControl, PageWrapper } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Lesson_09() {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeValue = (event: any) => {
    // event.target.value - то что ввел пользователь в input
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  // Lifecycle methods
  // 1. Mounting
  // useEffect:
  // 1ый аргумент - функция, которая должна выполняться в определенный жизненный цикл компонента
  // 2ой аргумент - массив зависимостей, с помощью него мы можем отловить и определить жизненный цикл компонента
  // Если мы прокидываем пустой массив в качестве 2 аргумента, то мы отлавливаем 1 фазу жизненного цикла - MOUNTING
  // useEffect(() => {
  //   console.log("MOUNTING");
  // }, []);

  // // 2. UPDATING
  // useEffect(() => {
  //   console.log("UPDATING");
  // }, [inputValue]);

  // // 3. UNMOUNTING
  // useEffect(() => {
  //   return () => {
  //     console.log("UNMOUNTING");
  //   };
  // }, []);

  const getCatFact = () => {};

  return (
    <PageWrapper>
      {/* <input
        value={inputValue}
        onChange={onChangeValue}
        placeholder="Enter item"
      /> */}
      <FormElementControl>
        <Input
          value={inputValue}
          onChange={onChangeValue}
          name="search"
          label="Search"
          placeholder="Enter smth"
          id="input-search"
        />
      </FormElementControl>

      <FormElementControl>
        <Button name="Get cat fact" onClick={getCatFact} />
      </FormElementControl>
    </PageWrapper>
  );
}

export default Lesson_09;
