//Node Modules
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//Project Files
import { queryDocuments } from "../../scripts/firestore/queryDocuments";
import { useUser } from "../../state/UserProvider";
import Loader from "../../components/common/Loader";
import Error from "../../pages/common/Error";
import TitleCard from "../../components/admin/TitleCard";
import AddButton from "../../components/admin/AddButton";
import BackButton from "../../components/common/BackButton";
import EmptyContent from "../../components/admin/EmptyContent";

export default function TitleCategory() {
  //Global State
  const { state } = useLocation();
  const { type } = state;
  const { titles, titlesDispatch } = useUser();

  //Local State
  const [status, setStatus] = useState("loading");

  // Properties
  const COLLECTION_NAME = "titles";
  const path = "titles";
  const message = `You do not have any titles under ${type}`;

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

  //Components
  const Titles = titles.map((title) => (
    <TitleCard key={title.id} title={title} path={path} />
  ));

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <div className="title-category flex-column-center">
      <section className="header">
        <h1>Title Category</h1>
        <span>{`${type}`}</span>
      </section>
      {titles.length === 0 && <EmptyContent message={message} />}
      {Titles}
      <div className="btn-holder">
        <AddButton path={path} type={type} text={"title"} />
        <BackButton goToLocation={"/"} />
      </div>
    </div>
  );
}
