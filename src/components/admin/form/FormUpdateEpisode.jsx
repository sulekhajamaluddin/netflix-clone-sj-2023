// Node modules
import { useState } from "react";

// Project files
import FieldsGenerator from "../../common/form/FormFieldGenerator";
import { updateDocument } from "../../../scripts/firestore/updateDocument";
import getUpdatedEpisodes from "../../../scripts/utils/getUpdatedEpisodes";
import { useModal } from "../../../state/ModalProvider";

export default function FormUpdateEpisode({ path, episode, fields, state }) {
  const [episodes, setEpisodes] = state;

  // Global state
  const { closeModal } = useModal();

  // Local state
  const [form, setForm] = useState(episode);

  async function onSubmit(event) {
    event.preventDefault();
    await updateDocument(path, form);
    const updatedEpisodesArray = getUpdatedEpisodes(form, episodes);
    setEpisodes(updatedEpisodesArray);
    closeModal();
  }

  return (
    <form className="form" onSubmit={(event) => onSubmit(event)}>
      <h2>Edit episode</h2>
      <FieldsGenerator fields={fields} state={[form, setForm]} />
      <button className="confirm">Confirm</button>
    </form>
  );
}
