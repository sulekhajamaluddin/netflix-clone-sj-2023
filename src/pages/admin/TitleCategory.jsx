//Node Modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project Files
import { queryDocuments } from "../../scripts/firestore/queryDocuments";
import { useTitles } from "../../state/TitlesProvider";
import Error from "../../pages/common/Error";
import Loader from "../../components/common/Loader";
import Titles from "../../components/admin/Titles";

export default function TitleCategory() {
  //Global State
  const { type } = useParams();
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
    const data = await queryDocuments(collection, "category", type).catch(
      onFail
    );
    onSuccess(data);
  }

  function onSuccess(data) {
    titlesDispatch({ type: "initialise", payload: data });
    setStatus("ready");
  }

  function onFail() {
    setStatus("error");
  }

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <div className="title-category-page">
      <Titles titles={titles} type={type} />
    </div>
  );
}
