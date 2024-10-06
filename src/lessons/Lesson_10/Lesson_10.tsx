import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Card from "components/Card/Card";
import {
  ButtonPosition,
  Position,
  PageWrapper,
  Div02,
  Div03,
  InputPosition,
  LabelCountry,
  Text,
} from "./styles";
import { useState } from "react";
import { v4 } from "uuid";
import { ApiUniversity, University } from "./types";

function Lesson_10() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  // const disabledButton = () => {
  //   if (country === "") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  const onInputCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCountry(event.target.value);
  };
  const getUniversities = async (): Promise<void> => {
    const response: Response = await fetch(
      `http://universities.hipolabs.com/search?country=${encodeURIComponent(
        country
      )}`,
      { method: "GET" }
    );

    const result: ApiUniversity[] = await response.json();

    if (response.ok) {
      const firstFifteenUniversities = result.slice(0, 15);
      const universitiesWithId: University[] = firstFifteenUniversities.map(
        (university: ApiUniversity) => ({
          ...university,
          id: v4(),
        })
      );
      setUniversities(universitiesWithId);
    } else {
      setError("Error fetching data from the server.");
    }
  };

  return (
    <PageWrapper>
      <LabelCountry>Search universities by country:</LabelCountry>
      <Position>
        <InputPosition>
          <Input
            id="1"
            label=""
            placeholder="Enter Country for searching universities"
            name="University"
            value={country}
            onChange={onInputCountry}
          />
        </InputPosition>
        <ButtonPosition>
          <Button disabled={false} name="Search" onClick={getUniversities} />
        </ButtonPosition>{" "}
      </Position>
      {error && <Text>{error}</Text>}

      <Div02>
        {universities.map((university) => (
          <Div03 key={university.id}>
            {
              <Card
                universityName={university.name}
                country={university.country}
                website={university.web_pages}
              />
            }
          </Div03>
        ))}
      </Div02>
    </PageWrapper>
  );
}
export default Lesson_10;
