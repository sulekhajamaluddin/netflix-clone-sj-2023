//Node Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Project Files
import { useUser } from "../../state/UserProvider";
import { useModal } from "../../state/ModalProvider";
import FormCreate from "../../components/admin/form/FormCreate";
import readDocuments from "../../scripts/firestore/readDocuments";

export default function SeasonCard({ season }) {
  const { episodes, episodesDispatch } = useUser();
  const { openModal } = useModal();
  const { id } = useParams();

  const [isActive, setIsActive] = useState(false);
  const COLLECTION_NAME = `titles/${id}/seasons/${season.id}/episodes`;

  const content =
    episodes.length === 0 ? (
      <p className="accordion-content">
        This season does not have any episodes yet.
      </p>
    ) : (
      episodes.map((episode) => (
        <div className="accordion-content">
          <a href={episode.episodeURL} target="_blank" rel="noreferrer">
            Episode: {episode.episodeNumber}
          </a>
        </div>
      ))
    );

  useEffect(() => {
    loadData(COLLECTION_NAME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(collection, titlesCollection) {
    const data = await readDocuments(collection).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data, title) {
    episodesDispatch({ type: "initialise", payload: data });
  }

  function onFail() {
    // setStatus("error");
  }

  return (
    <div className="season-card">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>Season {season.seasonNumber}</div>
          {isActive ? "-" : "+"}
        </div>
        {isActive && content}
      </div>
      {isActive && (
        <button onClick={() => openModal(<FormCreate />)}>Add episode</button>
      )}
    </div>
  );
}
