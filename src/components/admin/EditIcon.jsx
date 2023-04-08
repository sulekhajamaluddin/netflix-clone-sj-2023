//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import { useModal } from "../../state/ModalProvider";
import FormUpdate from "./form/FormUpdate";
import fields from "../../data/createTitleFields.json";

export default function EditIcon({ title }) {
  const { openModal } = useModal();

  const editIcon = "fa-solid fa-pen-to-square";
  const updateForm = <FormUpdate title={title} fields={fields} />;

  return (
    <button className="edit-icon">
      <FontAwesomeIcon icon={editIcon} onClick={() => openModal(updateForm)} />
    </button>
  );
}
