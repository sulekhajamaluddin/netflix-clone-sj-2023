//Node Modules
import { useEffect, useState } from "react";

//Project Files
import logo from "../../assets/film_logo.png";
import InfoButton from "../../components/user/InfoButton";
import PlayButton from "../../components/user/PlayButton";
import Category from "../../components/user/Category";
import readDocuments from "../../scripts/firestore/readDocuments";
import { useTitles } from "../../state/TitlesProvider";
import Loader from "../../components/common/Loader";
import Error from "../../pages/common/Error";

const heroSrc =
  "https://m.media-amazon.com/images/M/MV5BMmFkMGMwZGUtMDUwYy00MjdjLTllZWEtODdiZDc2Yjc0NDVmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg";

export default function UserHome() {
  //Global state
  const { titlesDispatch } = useTitles();

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
      <div className="hero">
        <img className="background" src={heroSrc} alt="Thumbnail" />
        <div className="overlay"></div>
      </div>
      <div className="content-container">
        <div className="title-logo flex-column">
          <img className="logo" src={logo} alt="logo" />
          <span className="title">The Pursuit Of Happyness</span>
          <div className="button-container">
            <PlayButton />
            <InfoButton />
          </div>
        </div>
        <Category type={"Popular on Netflix"} css={"first-row"} />
      </div>
      {/* <Category css={"second-row"} />
      <Category />
      <Category /> */}
    </main>
  );
}
