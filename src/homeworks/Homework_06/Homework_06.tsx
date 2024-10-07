import { HomeworkWrapper } from "./styles";
import Card from "components/Card/Card";
import { v4 } from "uuid";
import { ReactNode } from "react";
import { Universities } from "./types";

function Homework_06() {
  const universities: Universities[] = [
    { universityName: "UNEC", country: " ", website: [] },
    { universityName: "ADA", country: " ", website: [] },
    { universityName: "BDU", country: " ", website: [] },
  ];

  const universityList: ReactNode = universities.map(
    (university: Universities) => {
      const universityId: string = v4();

      return (
        <Card
          key={universityId}
          universityName={university.universityName}
          country={university.country}
          website={university.website}
        />
      );
    }
  );

  return <HomeworkWrapper>{universityList}</HomeworkWrapper>;
}
export default Homework_06;
