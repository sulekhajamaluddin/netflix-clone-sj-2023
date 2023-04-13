//Node Modules
import { createPortal } from "react-dom";

//Project Modules
import { useModal } from "../../state/ModalProvider";

export default function Modal() {
  const HTMLElement = document.getElementById("portal");
  const { modal, closeModal, modalStyle } = useModal();

  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="background" onClick={() => closeModal()}></div>
      <div className={modalStyle}>{modal}</div>
    </div>,
    HTMLElement
  );
}
