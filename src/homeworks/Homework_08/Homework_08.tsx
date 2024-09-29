import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { ButtonControl, HomeworkWrapper } from "./styles";

function Homework_08() {
  return (
    <HomeworkWrapper>
      <ButtonControl>
        <Button
          disabled={false}
          name="Active Button"
          onClick={() => {
            console.log("I am Simple Button");
          }}
        />
      </ButtonControl>

      <ButtonControl>
        <Button
          isDeleteVariant={true}
          disabled={false}
          name="Delete Button"
          onClick={() => {
            console.log("I am Simple Button");
          }}
        />
      </ButtonControl>

      <ButtonControl>
        <Button
          disabled={true}
          name="Deactive Button"
          onClick={() => {
            console.log("I am Simple Button");
          }}
        />
      </ButtonControl>

      <Input
        disabled={false}
        error={undefined}
        id="input-1"
        label="Normal input"
        placeholder="Enter your first name"
        name="first_name"
      />

      <Input
        disabled={true}
        error={undefined}
        id="input-1"
        label="Disable input"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Input
        disabled={false}
        error={undefined}
        id="input-1"
        label="Input without error"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Input
        disabled={false}
        error="Some error"
        id="input-1"
        label="Input with error"
        placeholder="Enter your first name"
        name="first_name"
      />
    </HomeworkWrapper>
  );
}

export default Homework_08;
