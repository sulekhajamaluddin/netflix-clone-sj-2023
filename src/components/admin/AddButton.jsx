//Project Files
import data from "../../data/titleData.json";
import fields from "../../data/createTitleFields.json";
import FormCreate from "../../components/admin/form/FormCreate";
import { useModal } from "../../state/ModalProvider";

export default function AddButton({ path, type, text }) {
  const { openModal } = useModal();

  const CreateForm = (
    <FormCreate path={path} fields={fields} data={data} type={type} />
  );

  return (
    <button className="add-btn" onClick={() => openModal(CreateForm)}>
      Create {`${text}`}
    </button>
  );
}
