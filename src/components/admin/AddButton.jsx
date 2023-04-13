//Project Files
import titleData from "../../data/titleData.json";
import titleFields from "../../data/createTitleFields.json";
import episodeData from "../../data/episodeData.json";
import episodeFields from "../../data/createEpisodeFields.json";
import FormCreate from "../../components/admin/form/FormCreate";
import { useModal } from "../../state/ModalProvider";

export default function AddButton({ path, type, text, state }) {
  const { openModal } = useModal();
  const fields = text === "title" ? titleFields : episodeFields;
  const data =
    text === "title" ? { ...titleData, category: type } : episodeData;

  const CreateForm = (
    <FormCreate
      path={path}
      fields={fields}
      data={data}
      text={text}
      state={state}
    />
  );

  return (
    <button className="add-btn" onClick={() => openModal(CreateForm)}>
      Create {`${text}`}
    </button>
  );
}
