import Button from "components/Button/Button";
import Input from "components/Input/Input";
import "./styles";
import { PageWrapper, Text, Card } from "./styles";
import { useState, useEffect } from "react";
import { University } from "./types";
import { v4 } from "uuid";

function Lesson_10() {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState<University[]>([]);

  const onInputCountry = (event: any) => {
    setCountry(event.target.value);
  };

  const getUniversities = () => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => setUniversities(data));
  };

  useEffect(() => {
    getUniversities();
  }, []);

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
        {universities.length > 0 ? (
          universities.map((university, v4) => (
            <div key={v4}>
              <h3>{university.name}</h3>
              <p>{university.country}</p>
              <a
                href={university.web_pages[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {university.web_pages[0]}
              </a>
            </div>
          ))
        ) : (
          <Text>No universities found</Text>
        )}
      </Card>
    </PageWrapper>
  );
}

export default Lesson_10;
