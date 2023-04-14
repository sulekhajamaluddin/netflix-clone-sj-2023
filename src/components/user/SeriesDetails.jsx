//Node Files
import { useEffect, useState } from "react";
//Project Files
import readDocuments from "../../scripts/firestore/readDocuments";
import { useTitles } from "../../state/TitlesProvider";
import Episodes from "./Episodes";

const SeriesDetails = ({ series }) => {
  //Global state
  const { seasons, seasonsDispatch } = useTitles();

  //Local state
  const seasonId = seasons[0] ? seasons[0].id : "";
  const [season, setSeason] = useState(seasonId);

  //Properties
  const COLLECTION_NAME = `titles/${series.id}/seasons`;

  //Methods
  function handleChange(e) {
    setSeason(e.target.value);
  }

  useEffect(() => {
    loadData(COLLECTION_NAME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(collection) {
    const data = await readDocuments(collection).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    seasonsDispatch({ type: "initialise", payload: data });
  }

  function onFail() {
    console.log("error");
  }

  //Components
  const options = seasons.map((season) => (
    <option key={season.id} value={season.id}>
      Season{season.seasonNumber}
    </option>
  ));

  return (
    <div className="series-details">
      <select value={season} onChange={(e) => handleChange(e)}>
        <option value="">Seasons</option>
        {options}
      </select>
      <Episodes season={season} series={series} />
    </div>
  );
};
export default SeriesDetails;
