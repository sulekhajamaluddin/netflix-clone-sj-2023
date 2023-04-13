//Node Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project Files
import { useTitles } from "../../state/TitlesProvider";
import { useModal } from "../../state/ModalProvider";
import readDocuments from "../../scripts/firestore/readDocuments";
import { readDocument } from "../../scripts/firestore/readDocument";
import SeasonCard from "../../components/admin/SeasonCard";
import Loader from "../../components/common/Loader";
import EmptyContent from "../../components/admin/EmptyContent";
import FormConfirmSeason from "../../components/admin/form/FormConfirmSeason";
import BackButton from "../../components/common/BackButton";
import Error from "../common/Error";

export default function Seasons() {
  //Global state
  const { seasons, seasonsDispatch } = useTitles();
  const { openModal } = useModal();
  const { id } = useParams();

  //Local State
  const [status, setStatus] = useState("loading");
  const [title, setTitle] = useState("");

  // Properties
  const COLLECTION_NAME = `titles/${id}/seasons`;
  const TITLES_COLLECTION = "titles";
  const message = `This series does not have any seasons yet`;
  const confirmForm = <FormConfirmSeason collection={COLLECTION_NAME} />;

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

  const Seasons = seasons.map((season) => {
    return <SeasonCard key={season.seasonNumber} season={season} />;
  });

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <div className="seasons-container">
      <div className="seasons flex-column-center">
        <h1>{title}</h1>
        {seasons.length === 0 && <EmptyContent message={message} />}
        <div className="btn-holder">
          <button className="add-btn" onClick={() => openModal(confirmForm)}>
            Add season
          </button>
          <BackButton goToLocation={-1} />
        </div>
        {Seasons}
      </div>
    </div>
  );
}
