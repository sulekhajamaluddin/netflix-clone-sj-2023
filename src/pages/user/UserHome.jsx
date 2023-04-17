//Node Modules
import { useEffect, useState } from "react";

//Project Files
import { useTitles } from "../../state/TitlesProvider";
import readDocuments from "../../scripts/firestore/readDocuments";
import Error from "../../pages/common/Error";
import Loader from "../../components/common/Loader";
import DefaultView from "../../components/user/DefaultView";
import SearchResults from "../../components/user/SearchResults";

// very good
export default function UserHome() {
  //Global state
  const { titlesDispatch, titlesType } = useTitles();

  //Local state
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

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <main className="container">
      {titlesType === "default" && <DefaultView />}
      {titlesType === "search" && <SearchResults />}
    </main>
  );
}
