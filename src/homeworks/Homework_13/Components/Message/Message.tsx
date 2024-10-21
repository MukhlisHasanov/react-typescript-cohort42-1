import { PageWrapper } from "./styles";
import { useContext } from "react";
import { MainContext } from "../BlogManagement/BlogManagement";

function Message() {
  const userData = useContext(MainContext); // Достаем значение из контекста

  return <PageWrapper>{userData}</PageWrapper>; // Используем userData вместо post
}

export default Message;