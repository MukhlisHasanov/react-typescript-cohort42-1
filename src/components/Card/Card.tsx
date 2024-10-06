import { CardWrapper, FirstString, SecondString, ThrirdString } from "./styles";
import { CardProps } from "./types";
import { v4 } from "uuid";

function Card({ universityName, country, website }: CardProps) {
  return (
    <CardWrapper>
      <FirstString>Name: {universityName} </FirstString>
      <SecondString>Country: {country}</SecondString>
      <ThrirdString>
        Website:
        {website.map((url, v4) => (
          <a key={v4} href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        ))}
      </ThrirdString>
    </CardWrapper>
  );
}

export default Card;