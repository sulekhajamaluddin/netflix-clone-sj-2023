//Node Modules
import { useEffect, useState } from "react";
//Project Modules
import readDocuments from "../../scripts/firestore/readDocuments";

export default function Episodes({ season, series }) {
  console.log(season);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    console.log("Inside useeffect");
    const EPISODES = `titles/${series.id}/seasons/${season}/episodes`;
    loadData(EPISODES);
  }, [season]);

  async function loadData(collection) {
    const episodes = await readDocuments(collection).catch(onFail);
    console.log(episodes);
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
        <span key={episode.id}>{episode.episodeNumber}</span>
      ))
    );

  return <div>{contents}</div>;
}
