//Node Modules
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Project Modules
import readDocuments from "../../scripts/firestore/readDocuments";
import { useModal } from "../../state/ModalProvider";

export default function Episodes({ season, series }) {
  //Global state
  const navigate = useNavigate();
  const { closeModal } = useModal();
  //Local state
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    const EPISODES = `titles/${series.id}/seasons/${season}/episodes`;
    loadData(EPISODES);
  }, [season]);

  async function loadData(collection) {
    const episodes = await readDocuments(collection).catch(onFail);
    onSuccess(episodes);
  }

  function onSuccess(data) {
    setEpisodes(data);
  }

  function onFail() {
    console.log("error");
  }

  function handleClick(id, url) {
    closeModal();
    navigate(`/${id}/player`, { state: { url: url } });
  }

  const contents =
    episodes &&
    episodes.map((episode) => {
      const { id, episodeNumber, episodeURL } = episode;
      return (
        <article key={id}>
          Episode: {episodeNumber}{" "}
          <button onClick={() => handleClick(id, episodeURL)}>Play</button>
        </article>
      );
    });

  return (
    <div className="episodes">
      {episodes && episodes?.length === 0 && <span>Content coming soon</span>}
      {contents}
    </div>
  );
}
