//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import { useModal } from "../../state/ModalProvider";
import FormDelete from "./form/FormDelete";

export default function DeleteIcon({ titleID }) {
  const { openModal } = useModal();

  return (
    <button onClick={() => openModal(<FormDelete titleID={titleID} />)}>
      <FontAwesomeIcon className="delete-icon" icon={"fa-solid fa-trash-can"} />
    </button>
  );
}
