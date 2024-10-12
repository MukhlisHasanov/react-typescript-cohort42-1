import { useContext } from "react";
import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";
import { MainContext } from "lessons/Lesson_13/components/Main/Main";

// interface ContentProps {
//   fullName: string | undefined;
//   age:  number | undefined;
//   jobPosition: string | undefined;
// }

function Content() {
  const userData = useContext(MainContext);
  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {userData && (
        <>
          <ContentInfo>{userData.fullName}</ContentInfo>
          <ContentInfo>{userData.age}</ContentInfo>
          <ContentInfo>{userData.jobPosition}</ContentInfo>
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
