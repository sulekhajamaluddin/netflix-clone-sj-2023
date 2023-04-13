// Project files
import deleteDocument from "../../../scripts/firestore/deleteDocument";
import getSplicedEpisodes from "../../../scripts/utils/getSplicedEpisodes";
import { useModal } from "../../../state/ModalProvider";

export default function FormDeleteEpisode({ id, path, state }) {
  const [episodes, setEpisodes] = state;
  // Global state
  const { closeModal } = useModal();

  // Method
  async function onConfirm() {
    await deleteDocument(path, id);
    const spicedEpisodesArray = getSplicedEpisodes(id, episodes);
    setEpisodes(spicedEpisodesArray);
    closeModal();
  }

  return (
    <div className="form">
      <h2>Delete episode</h2>
      <p>
        Warning: Deleting this <b className="red">episode</b> is a permanent
        action. You will lose all data associated with it. Are you sure you want
        to delete it?
      </p>
      <button className="confirm" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
}
