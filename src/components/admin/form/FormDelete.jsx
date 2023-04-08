// Project files
import deleteDocument from "../../../scripts/firestore/deleteDocument";
import { useModal } from "../../../state/ModalProvider";
import { useUser } from "../../../state/UserProvider";

export default function FormDelete({ titleID }) {
  // Global state
  const { closeModal } = useModal();
  const { titlesDispatch } = useUser();

  // Method
  async function onConfirm() {
    await deleteDocument("titles", titleID);
    titlesDispatch({ type: "delete", payload: titleID });
    closeModal();
  }

  return (
    <div className="form">
      <h2>Delete item</h2>
      <p>
        ℹ️ Warning, deleting the item is a permanent action. Press the button
        below if you are sure about it
      </p>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
}
