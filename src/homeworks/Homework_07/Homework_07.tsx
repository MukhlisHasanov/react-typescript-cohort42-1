import Feedback from "components/Feedback/Feedback";
import Input from "components/Input/Input";
import "./styles.css";
import LoginForm from "components/LoginForm/LoginForm";
import SimponsCard from "components/SimpsonsCard/SimpsonCard";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import { Simpsons } from "./types";

function Homework_07() {
  const homerSimpson: Simpsons = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const onLike = (): void => {
    setLikes((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = (): void => {
    setDislikes((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const resetResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="homework07-wrapper">
      <Input
        id="input-1"
        label="First name"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Feedback
        likes={likes}
        dislikes={dislikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
      <LoginForm />
      <Button name="Open Simpson Card" onClick={openModal} />
      {isModalOpen && (
        <Modal>
          <div className="modal-example-container">
            <SimponsCard
              firstName={homerSimpson.firstName}
              lastName={homerSimpson.lastName}
              avatar={homerSimpson.avatar}
              hobby={homerSimpson.hobby}
              job={homerSimpson.job}
            />
            <p>
              Homer Jay Simpson is one of the main characters in the animated
              sitcom The Simpsons and the father of the family of the same name.
              Homer and his wife Marge have three children: Bart, Lisa, and
              Maggie. As the family's breadwinner, Homer works at the
              Springfield Nuclear Power Plant. Homer embodies several classes of
              American stereotypes: he is slovenly, incompetent, clumsy, lazy, a
              heavy drinker, and ignorant, and has an over-important
              personality; however, he is also, at heart, a decent man who is
              fiercely loyal to his family. Despite the suburban blue-collar
              routine of the show, he has a number of remarkable experiences. He
              usually wears a white polo, blue jeans, and gray shoes.
            </p>
            <Button name="Close Modal" onClick={closeModal} />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Homework_07;
