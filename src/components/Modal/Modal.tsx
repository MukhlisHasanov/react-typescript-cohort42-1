import "./styles.css";

function Modal({ children }: any) {
  return (
    <div className="modal-wrapper">
      <div className="modal-component">{children}</div>
    </div>
  );
}

export default Modal;