// Node modules
import { useState } from "react";

// Project files
import FormFieldGenerator from "../../common/form/FormFieldGenerator";
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useModal } from "../../../state/ModalProvider";
import { useUser } from "../../../state/UserProvider";

export default function FormCreate({ path, fields, data, type }) {
  // Global state
  const { closeModal } = useModal();
  const { titlesDispatch } = useUser();

  // Local state
  const [form, setForm] = useState({ ...data, category: type });

  // Method
  async function onSubmit(event) {
    event.preventDefault();
    const documentId = await createDocument(path, form);
    titlesDispatch({
      type: "create",
      payload: { id: documentId, ...form },
    });
    closeModal();
  }

  return (
    <div className="form">
      <h2>Add Title</h2>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <FormFieldGenerator fields={fields} state={[form, setForm]} />
        <button className="confirm">Confirm</button>
      </form>
    </div>
  );
}
