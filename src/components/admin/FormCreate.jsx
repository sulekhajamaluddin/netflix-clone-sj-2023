// Node modules
import { useState } from "react";

// Project files
import FormFieldGenerator from "../../components/common/form/FormFieldGenerator";
import { createDocument } from "../../scripts/firestore/createDocument";
import { useModal } from "../../state/ModalProvider";

export default function FormCreate({ path, fields, data }) {
  // Global state
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState(data);

  // Method
  async function onSubmit(event) {
    event.preventDefault();

    const result = await createDocument(path, form);

    result.status ? onSuccess(result.payload) : onFailure(result.message);
  }

  function onSuccess(id) {
    // dispatch({ type: eItemsType.CREATE_ITEM, payload: [form, id] });
    setModal(null);
  }

  function onFailure(errorMessage) {
    alert(errorMessage);
  }

  return (
    <div className="formulary">
      <h2>Add item</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <FormFieldGenerator fields={fields} state={[form, setForm]} />
        <button>Confirm</button>
      </form>
    </div>
  );
}
