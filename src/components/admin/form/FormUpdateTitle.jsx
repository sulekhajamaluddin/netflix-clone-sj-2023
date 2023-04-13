// Node modules
import { useState } from "react";

// Project files
import FieldsGenerator from "../../common/form/FormFieldGenerator";
import { updateDocument } from "../../../scripts/firestore/updateDocument";
import { useModal } from "../../../state/ModalProvider";
import { useTitles } from "../../../state/TitlesProvider";

export default function FormUpdate({ title, fields }) {
  // Global state
  const { closeModal } = useModal();
  const { titlesDispatch } = useTitles();

  // Local state
  const [form, setForm] = useState(title);

  // Method
  async function onSubmit(event) {
    event.preventDefault();
    await updateDocument("titles", form);
    titlesDispatch({ type: "update", payload: form });
    closeModal();
  }

  return (
    <form className="form" onSubmit={(event) => onSubmit(event)}>
      <h2>Edit title</h2>
      <FieldsGenerator fields={fields} state={[form, setForm]} />
      <button className="confirm">Confirm</button>
    </form>
  );
}
