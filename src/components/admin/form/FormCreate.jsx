// Node modules
import { useState } from "react";

// Project files
import FormFieldGenerator from "../../common/form/FormFieldGenerator";
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useModal } from "../../../state/ModalProvider";
import { useTitles } from "../../../state/TitlesProvider";

export default function FormCreate({ path, fields, data, text }) {
  // Global state
  const { closeModal } = useModal();
  const { titlesDispatch, seasonsDispatch } = useTitles();

  // Local state
  const [form, setForm] = useState(data);

  //Methods
  async function createFirstSeason(newSeriesId) {
    const firstSeasonPath = `${path}/${newSeriesId}/seasons`;
    const firstSeason = {
      seasonNumber: 1,
    };
    const documentId = await createDocument(firstSeasonPath, firstSeason);
    seasonsDispatch({
      type: "create",
      payload: { ...firstSeason, id: documentId },
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    const documentId = await createDocument(path, form);
    titlesDispatch({
      type: "create",
      payload: { id: documentId, ...form },
    });
    data.category === "series" && createFirstSeason(documentId);
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
