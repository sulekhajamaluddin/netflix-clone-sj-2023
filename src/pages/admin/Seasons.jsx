//Node Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project Files
import { useUser } from "../../state/UserProvider";
import { useModal } from "../../state/ModalProvider";
import readDocuments from "../../scripts/firestore/readDocuments";
import SeasonCard from "../../components/admin/SeasonCard";
import Loader from "../../components/common/Loader";
import Error from "../common/Error";
import EmptyContent from "../../components/admin/EmptyContent";
import { readDocument } from "../../scripts/firestore/readDocument";
import FormConfirm from "../../components/admin/form/FormConfirm";
import FormFieldGenerator from "../../components/common/form/FormFieldGenerator";
import fields from "../../data/selectSeasonField.json";
import data from "../../data/seasonData.json";

export default function Seasons() {
  //Global state
  const { seasons, seasonsDispatch } = useUser();
  const { openModal } = useModal();
  const { id } = useParams();

  //Local State
  const [status, setStatus] = useState("loading");
  const [form, setForm] = useState(data);
  const [title, setTitle] = useState("");

  // Properties
  const COLLECTION_NAME = `titles/${id}/seasons`;
  const TITLES_COLLECTION = "titles";
  const message = `This series does not have any seasons yet`;
  const confirmForm = <FormConfirm collection={COLLECTION_NAME} />;

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
  //   const Season = seasons.filter(
  //     (season) => season.seasonNumber === form.seasonNumber
  //   );

  const Seasons = seasons.map((season) => (
    <SeasonCard key={season.id} season={season} />
  ));

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <div className="seasons flex-column-center">
      <h1>{title}</h1>
      {seasons.length === 0 && <EmptyContent message={message} />}
      <div className="btn-holder">
        <button className="add-btn" onClick={() => openModal(confirmForm)}>
          Add season
        </button>
        {/* <FormFieldGenerator
          fields={fields}
          seasons={seasons}
          state={[form, setForm]}
        /> */}
      </div>
      {/* {Season[0] && <SeasonCard season={Season[0]} />} */}
      {Seasons}
    </div>
  );
}
