import "./styles.css";
import { ModalProps } from "./types";


function Modal({ children }: ModalProps) {
  
  return (
    <div className="modal-wrapper">
      <div className="modal-component">{children}</div>
    </div>
  );
}

export default Modal;