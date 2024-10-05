

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, Card, Text } from "./styles"
import { useEffect, useState } from "react";

function Lesson_10 () {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<any[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);


  const onInputCountry = (event: any) => {
    setCountry(event.target.value);
  };


  const getUniversities = () => {
    setUniversities([]);
    setError(undefined);

    fetch(`http://universities.hipolabs.com/search?country=${country}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error');
        }
       
        if (response)
  })
    .then(data => {
        
  console.log(getUniversities);
    return (
        <PageWrapper>
        <Input
        id="1"
        label="Country"
        placeholder="Enter Country for searching universities"
        name="University"
        value={country}
        onChange={onInputCountry}
      />
      <Card>
      <Button name="Get Universities" onClick={getUniversities} />
      {universities && <Text>{universities}</Text>}
      {error && <Text>{error}</Text>} 
      </Card>
      </PageWrapper>
    )
}
)};
}
export default Lesson_10;