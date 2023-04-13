//Project Files
import titleData from "../../data/titleData.json";
import titleFields from "../../data/createTitleFields.json";
import episodeData from "../../data/episodeData.json";
import episodeFields from "../../data/createEpisodeFields.json";
import FormCreateTitle from "../../components/admin/form/FormCreate";
import FormCreateEpisode from "./form/FormCreateEpisode";
import { useModal } from "../../state/ModalProvider";

export default function AddButton({ path, type, text, state }) {
  const { openModal } = useModal();
  const fields = text === "title" ? titleFields : episodeFields;
  const data =
    text === "title" ? { ...titleData, category: type } : episodeData;

  const CreateForm =
    text === "title" ? (
      <FormCreateTitle path={path} fields={fields} data={data} text={text} />
    ) : (
      <FormCreateEpisode
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
