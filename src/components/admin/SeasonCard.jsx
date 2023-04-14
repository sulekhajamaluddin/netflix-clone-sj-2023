//Node Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project Files
import readDocuments from "../../scripts/firestore/readDocuments";
import DeleteIcon from "../../components/admin/DeleteIcon";
import AddButton from "./AddButton";
import Episode from "./Episode";

export default function SeasonCard({ season }) {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const COLLECTION_NAME = `titles/${id}/seasons/${season.id}/episodes`;

  useEffect(() => {
    async function init() {
      const data = await readDocuments(COLLECTION_NAME);
      setEpisodes(data);
    }
    init();
  }, [episodes.length]);

  //Components
  const addButton = (
    <AddButton
      path={COLLECTION_NAME}
      text="episode"
      state={[episodes, setEpisodes]}
    />
  );

  const content =
    episodes.length === 0 ? (
      <p className="accordion-content">
        This season does not have any episodes yet.
      </p>
    ) : (
      episodes.map((episode) => (
        <Episode
          key={episode.id}
          episode={episode}
          collectionName={COLLECTION_NAME}
          state={[episodes, setEpisodes]}
        />
      ))
    );

  return (
    <div className="season-card-container">
      <div className="season-card">
        <div className="accordion-item">
          <div className="title" onClick={() => setIsActive(!isActive)}>
            <span>Season {season.seasonNumber}</span>
            {isActive ? "-" : "+"}
          </div>
          {isActive && content}
        </div>
        {isActive && addButton}
      </div>
      <DeleteIcon id={season.id} path={`titles/${id}/seasons`} type="season" />
    </div>
  );
}
