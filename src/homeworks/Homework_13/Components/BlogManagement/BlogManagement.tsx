import { PageWrapper, Textarea } from "./styles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Card from "homeworks/Homework_13/Components/Card/Card";
import { createContext, useState } from "react";

// Обновляем тип контекста на строку (если в контексте должен быть пост)
export const MainContext = createContext<string>("");

function BlogManagement() {
  const [post, setPost] = useState(""); // Управляем локальным состоянием
  const [inputPostValue, setInputPostValue] = useState(post);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPostValue(event.target.value); // Обновляем значение инпута
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPost(inputPostValue); // Обновляем локальное состояние при отправке формы
  };

  return (
    <MainContext.Provider value={post}>
      <PageWrapper>
        {/* Если это форма, лучше заменить PageWrapper на form */}
        <form onSubmit={handleSubmit}>
          <Textarea></Textarea>

          <Input
            id=""
            name="message"
            value={inputPostValue}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          <Button name="Create post" onClick={handleSubmit} />
        </form>
        <Card> {post} </Card>
      </PageWrapper>
    </MainContext.Provider>
  );
}

export default BlogManagement;
