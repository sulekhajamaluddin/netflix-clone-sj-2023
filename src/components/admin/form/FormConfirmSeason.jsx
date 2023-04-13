// Project files
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useModal } from "../../../state/ModalProvider";
import { useTitles } from "../../../state/TitlesProvider";

export default function FormConfirmSeason({ collection }) {
  // Global state
  const { closeModal } = useModal();
  const { seasons, seasonsDispatch } = useTitles();

  // Method
  async function onConfirm() {
    const newSeason = {
      seasonNumber: seasons.length + 1,
    };
    const documentId = await createDocument(collection, newSeason);
    seasonsDispatch({
      type: "create",
      payload: { ...newSeason, id: documentId },
    });
    closeModal();
  }

  return (
    <div className="form">
      <h2>Add a new season</h2>
      <p>Do you want to create a new season: {seasons.length + 1}</p>
      <button className="confirm" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
}
