

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, Card, Text } from "./styles"
import { useEffect, useState } from "react";

function Lesson_10 () {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);


  const onInputCountry = (event: any) => {
    setCountry(event.target.value);
  };


  const getUniversities = async () => {
    setUniversities(undefined);
    setError(undefined);

    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}, 
      { method: "GET",}`);

    const result = await response.json();

    if (response.ok) {
      setUniversities(result.searcountry);
    } else {
      setError("Error!!!");
    }
  };

  useEffect(() => {
    getUniversities();
  }, []);

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
export default Lesson_10