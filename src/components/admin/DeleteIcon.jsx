//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import { useModal } from "../../state/ModalProvider";
import FormDelete from "./form/FormDelete";

export default function DeleteIcon({ id, path, type }) {
  const { openModal } = useModal();

  return (
    <button
      onClick={() => openModal(<FormDelete id={id} path={path} type={type} />)}
    >
      <FontAwesomeIcon className="delete-icon" icon={"fa-solid fa-trash-can"} />
    </button>
  );
}
