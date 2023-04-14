//Node Modules
import { useEffect, useState } from "react";
//Project Modules
import readDocuments from "../../scripts/firestore/readDocuments";

export default function Episodes({ season, series }) {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  console.log(selectedEpisode);

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

  const contents =
    episodes && episodes?.length === 0 ? (
      <span>Content coming soon</span>
    ) : (
      episodes &&
      episodes.map((episode) => (
        <button
          className="episode"
          key={episode.id}
          onClick={() => setSelectedEpisode(episode)}
        >
          Episode: {episode.episodeNumber}
        </button>
      ))
    );

  return (
    <div className="episodes">
      {selectedEpisode && (
        <p>
          You have selected Episode: {selectedEpisode.episodeNumber}. Click on
          play button to play the episode.
        </p>
      )}
      {contents}
    </div>
  );
}
