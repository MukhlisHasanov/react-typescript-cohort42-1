import Feedback from "components/Feedback/Feedback";
import Input from "components/Input/Input";
import "./styles.css";
import LoginForm from "components/LoginForm/LoginForm";
import SimponsCard from "components/SimpsonsCard/SimpsonCard";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

function Homework_07() {
  return (
    <div className="homework07-wrapper">
      {/* <Feedback />;<Input  />; */}
      <LoginForm />
      <Modal>
        <div className="modal-example-container">
          <h3>Some Title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button name="Close Modal" />
        </div>
      </Modal>
      {/* <SimponsCard
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        avatar={homerSimpson.avatar}
        hobby={homerSimpson.hobby}
        job={homerSimpson.job}
      /> */}
    </div>
  );
}

export default Homework_07;
