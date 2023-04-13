// Project files
import deleteDocument from "../../../scripts/firestore/deleteDocument";
import { useModal } from "../../../state/ModalProvider";
import { useTitles } from "../../../state/TitlesProvider";

export default function FormDelete({ id, path, type }) {
  // Global state
  const { closeModal } = useModal();
  const { titlesDispatch, seasonsDispatch } = useTitles();

  //Properties
  const dispatch = type === "title" ? titlesDispatch : seasonsDispatch;

  // Method
  async function onConfirm() {
    await deleteDocument(path, id);
    dispatch({ type: "delete", payload: id });
    closeModal();
  }

  return (
    <div className="form">
      <h2>Delete {type}</h2>
      <p>
        Warning: Deleting this <b className="red">{type}</b> is a permanent
        action. You will lose all data associated with it. Are you sure you want
        to delete it?
      </p>
      <button className="confirm" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
}
