// Project files
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useModal } from "../../../state/ModalProvider";
import { useUser } from "../../../state/UserProvider";

export default function FormConfirm({ collection }) {
  // Global state
  const { closeModal } = useModal();
  const { seasons, seasonsDispatch } = useUser();

  // Method
  async function onConfirm() {
    const newSeason = {
      seasonNumber: seasons.length + 1,
    };
    await createDocument(collection, newSeason);
    seasonsDispatch({ type: "create", payload: newSeason });
    closeModal();
  }

  return (
    <div className="form">
      <h2>Add a new season</h2>
      <p>Do you want to create a new season: {seasons.length + 1}</p>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
}
