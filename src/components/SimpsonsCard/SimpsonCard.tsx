import { Avatar, CardItem, CardWrapper } from "./styles";

import { SimpsonsCardProps } from "./types";

function SimponsCard({
  firstName,
  lastName,
  avatar,
  job,
  hobby = "No Hobby",
}: SimpsonsCardProps) {
  const getSimpsonName = (): string => {
    return `${firstName} ${lastName}`;
  };

  return (
    <CardWrapper>
      <Avatar src={avatar} alt="Avatar" />
      <CardItem>Full name: {getSimpsonName()}</CardItem>
      <CardItem>Job: {job}</CardItem>
      <CardItem>Hobby: {hobby}</CardItem>
    </CardWrapper>
  );
}

export default SimponsCard;
