//Node Modules

//Project Files
import { useModal } from "../../state/ModalProvider";
import fields from "../../data/createEpisodeFields.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormUpdateEpisode from "./form/FormUpdateEpisode";
import FormDeleteEpisode from "./form/FormDeleteEpisode";

export default function Episode({ episode, collectionName, state }) {
  const { openModal } = useModal();
  const [episodes, setEpisodes] = state;
  const { episodeURL, episodeNumber, id } = episode;

  const formUpdateEpisode = (
    <FormUpdateEpisode
      path={collectionName}
      episode={episode}
      state={[episodes, setEpisodes]}
      fields={fields}
    />
  );

  const formDeleteEpisode = (
    <FormDeleteEpisode
      id={id}
      path={collectionName}
      state={[episodes, setEpisodes]}
    />
  );

  return (
    <div className="accordion-content" key={episode.episodeNumber}>
      <a href={episodeURL} target="_blank" rel="noreferrer">
        Episode: {episodeNumber}
      </a>
      <button
        className="edit-icon"
        onClick={() => openModal(formUpdateEpisode)}
      >
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
      </button>
      <button
        className="delete-icon"
        onClick={() => openModal(formDeleteEpisode)}
      >
        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </button>
    </div>
  );
}
