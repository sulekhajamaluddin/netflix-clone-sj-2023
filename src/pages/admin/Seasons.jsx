//Node Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project Files
import { useUser } from "../../state/UserProvider";
import readDocuments from "../../scripts/firestore/readDocuments";
import SeasonCard from "../../components/admin/SeasonCard";
import Loader from "../../components/common/Loader";
import Error from "../common/Error";
import EmptyContent from "../../components/admin/EmptyContent";
import { readDocument } from "../../scripts/firestore/readDocument";
import { createDocument } from "../../scripts/firestore/createDocument";

export default function Seasons() {
  //Global state
  const { seasons, seasonsDispatch } = useUser();
  const { id } = useParams();

  //Local State
  const [status, setStatus] = useState("loading");
  const [title, setTitle] = useState("");

  // Properties
  const COLLECTION_NAME = `titles/${id}/seasons`;
  const TITLES_COLLECTION = "titles";
  const message = `This series does not have any seasons yet`;

  async function addSeason() {
    const newSeason = {
      seasonNumber: seasons.length + 1,
    };
    await createDocument(COLLECTION_NAME, newSeason);
    seasonsDispatch({ type: "create", payload: newSeason });
  }

  useEffect(() => {
    loadData(COLLECTION_NAME, TITLES_COLLECTION);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(collection, titlesCollection) {
    const data = await readDocuments(collection).catch(onFail);
    const title = await readDocument(titlesCollection, id);
    onSuccess(data, title.data);
  }

  function onSuccess(data, title) {
    seasonsDispatch({ type: "initialise", payload: data });
    setTitle(title.heading);
    setStatus("ready");
  }

  function onFail() {
    setStatus("error");
  }

  //Components
  const Seasons = seasons.map((season) => (
    <SeasonCard key={season.seasonNumber} number={season.seasonNumber} />
  ));

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <div className="seasons flex-column-center">
      <h1>{title}</h1>
      {seasons.length === 0 && <EmptyContent message={message} />}
      <button className="add-btn" onClick={() => addSeason()}>
        Add season
      </button>
      {Seasons}
    </div>
  );
}
