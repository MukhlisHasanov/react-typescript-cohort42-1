import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper } from "./styles"

function Lesson_10 () {
    return (
        <PageWrapper>
        <Input
        $error={undefined}
        id="1"
        label="Country"
        placeholder="Enter Country for searching universities"
        name="University"
      />       
      </PageWrapper>
    )
}
export default Lesson_10