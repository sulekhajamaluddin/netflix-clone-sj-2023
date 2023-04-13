// Node modules
import { useState } from "react";

// Project files
import FormFieldGenerator from "../../common/form/FormFieldGenerator";
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useModal } from "../../../state/ModalProvider";

export default function FormCreateEpisode({ path, fields, data, text, state }) {
  // Global state
  const { closeModal } = useModal();
  const [episodes, setEpisodes] = state;

  // Local state
  const [form, setForm] = useState(data);

  async function onSubmit(event) {
    event.preventDefault();
    const documentId = await createDocument(path, form);
    const newEpisode = { id: documentId, ...form };
    setEpisodes([...episodes, newEpisode]);
    closeModal();
  }

  return (
    <form className="form" onSubmit={(event) => onSubmit(event)}>
      <h2>Add {text}</h2>
      <FormFieldGenerator fields={fields} state={[form, setForm]} />
      <button className="confirm">Confirm</button>
    </form>
  );
}
