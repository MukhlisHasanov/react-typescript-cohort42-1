import { ModalProps } from "./types";
import { ModalWrapper, ModalComponent } from "./styles";

function Modal({ children, closeModal }: ModalProps) {
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalComponent>{children}</ModalComponent>
    </ModalWrapper>
  );
}

export default Modal;
