import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {  Div01, Div02, Div03, LabelCountry } from "./styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ApiUniversity, University } from "./types";

function Lesson_10() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const onInputCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCountry(event.target.value);
  };

  const getUniversities = async (): Promise<void> => {
    if (!country.trim()) {
      alert("Please, enter a country name.");
      return;
    }
    try {
      const response: Response = await fetch(
        `http://universities.hipolabs.com/search?country=${encodeURIComponent(
          country
        )}`,
        { method: "GET" }
      );

      if (!response.ok) {
        setError("Error fetching data from the server.");
        return;
      }

      const result: ApiUniversity[] = await response.json();

      const firstFifteenUniversities = result.slice(0, 15);

      const universitiesWithId: University[] = firstFifteenUniversities.map(
        (university: ApiUniversity) => ({
          ...university,
          id: uuidv4(),
        })
      );
      setUniversities(universitiesWithId);
      setError(undefined);
    } catch (error) {
      console.error("Network Error", error);
      setError("Network Error");
    }
  };

  return (
    <Div01>
      <LabelCountry>
        Country:{" "}
        <Input
          id="1"
          label=""
          placeholder="Enter Country for searching universities"
          name="University"
          value={country}
          onChange={onInputCountry}
        />{" "}
        
          <Button name="Get Universities" onClick={getUniversities} />
        
      </LabelCountry>

      <Div02>
        {universities.map((university) => (
          <Div03 key={university.id}>
            <h3>{university.name}</h3>
            <p>Country: {university.country}</p>
            <p>Web Pages:</p>
            <ul>
              {university.web_pages.map((page, index) => (
                <li key={index}>
                  <a href={page} target="_blank" rel="noopener noreferrer">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </Div03>
        ))}
      </Div02>
    </Div01>
  );
}
export default Lesson_10;
