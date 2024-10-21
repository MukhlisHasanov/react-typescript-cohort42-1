import { CardProps } from "./types";
import { CardTitle, PageWrapper, UserInfo } from "./styles";
import Message from "homeworks/Homework_13/Components/Message/Message";



function Card({children}: CardProps ) {
  return (
    <PageWrapper>
      <CardTitle>Jeack Reacher</CardTitle>
      <UserInfo>Message</UserInfo>
      <Message />
    </PageWrapper>
  );
}

export default Card;
