import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { ButtonControl, HomeworkWrapper } from "./styles";

function Homework_08() {
  return (
    <HomeworkWrapper>
      <ButtonControl>
        <Button
          name="Active Button"
          onClick={() => {
            console.log("I am Active Button");
          }}
        />
      </ButtonControl>

      <ButtonControl>
        <Button
          // Если isDeleteVariant не передавать явно true, то сам React это воспринимает это как true
          isDeleteVariant
          name="Delete Button"
          onClick={() => {
            console.log("I am Delete Button");
          }}
        />
      </ButtonControl>

      <ButtonControl>
        <Button
          disabled
          name="Deactive Button"
          onClick={() => {
            console.log("I am Deactive Button");
          }}
        />
      </ButtonControl>

      <Input
        $error={undefined}
        id="input-1"
        label="Normal input"
        placeholder="Enter your first name"
        name="first_name"
      />

      <Input
        // Если isDeleteVariant не передавать явно true, то сам React это воспринимает это как true
        disabled
        $error={undefined}
        id="input-1"
        label="Disable input"
        placeholder="Enter your first name"
        name="first_name"
      />

      <Input
        $error={"Some error"}
        id="input-1"
        label="Input with error"
        placeholder="Enter your first name"
        name="first_name"
      />
    </HomeworkWrapper>
  );
}

export default Homework_08;
