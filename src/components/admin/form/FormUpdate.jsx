// Node modules
import { useState } from "react";

// Project files
import FieldsGenerator from "../../common/form/FormFieldGenerator";
import { updateDocument } from "../../../scripts/firestore/updateDocument";
import { useModal } from "../../../state/ModalProvider";
import { useUser } from "../../../state/UserProvider";

export default function FormUpdate({ title, fields }) {
  // Global state
  const { closeModal } = useModal();
  const { titlesDispatch } = useUser();

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
    <div>
      <h2>Edit item</h2>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <FieldsGenerator fields={fields} state={[form, setForm]} />
        <button>Confirm</button>
      </form>
    </div>
  );
}
