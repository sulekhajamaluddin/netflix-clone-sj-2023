//Node Modules
import { useState, useEffect } from "react";

//Project Files
import { useTitles } from "../../state/TitlesProvider";
import readDocuments from "../../scripts/firestore/readDocuments";
import BackButton from "../../components/common/BackButton";
import Loader from "../../components/common/Loader";
import Error from "../../pages/common/Error";

export default function SortTitles() {
  //Global state
  const { titles, titlesDispatch } = useTitles();

  //Local State
  const [status, setStatus] = useState("loading");

  // Properties
  const COLLECTION_NAME = "titles";

  useEffect(() => {
    loadData(COLLECTION_NAME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(collection) {
    const data = await readDocuments(collection).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    titlesDispatch({ type: "initialise", payload: data });
    setStatus("ready");
  }

  function onFail() {
    setStatus("error");
  }

  //Components
  const Titles = titles.map((title) => <p>{title.heading}</p>);

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <div className="titles-list-container">
      <div className="sorted-list">
        <select></select>
      </div>
      <div className="titles-list">
        {Titles}
        <BackButton goToLocation={"/"} />
      </div>
    </div>
  );
}
