//Node modules
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Project files
import logo from "../../assets/film_logo.png";
import InfoButton from "../../components/user/InfoButton";
import PlayButton from "../../components/user/PlayButton";
import CategoryRow from "../../components/user/CategoryRow";
import hero from "../../data/hero.json";
import readDocuments from "../../scripts/firestore/readDocuments";

export default function DefaultView() {
  //Global state
  const navigate = useNavigate();
  //Local state
  const [displayCategories, setDisplayCategories] = useState([]);
  //Properties
  const COLLECTION_NAME = "display_categories";
  const imageSrc = hero.backgroundURL;

  useEffect(() => {
    loadData(COLLECTION_NAME);
  }, []);

  async function loadData(collection) {
    const data = await readDocuments(collection).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    setDisplayCategories(data);
  }

  function onFail() {
    alert("Something went wrong");
  }

  function handleClick(id, url) {
    navigate(`/${id}/player`, { state: { url: url } });
  }

  //Components
  const category_rows = displayCategories.map((category) => (
    <CategoryRow type={category.name} key={category.id} />
  ));

  return (
    <>
      <section className="hero">
        <img className="background" src={imageSrc} alt="Thumbnail" />
        <div className="overlay"></div>
      </section>
      <div className="content-container">
        <div className="title-logo flex-column">
          <img className="logo" src={logo} alt="logo" />
          <span className="title">{hero.title}</span>
          <div className="button-container">
            <PlayButton handleClick={() => handleClick(hero.id, hero.url)} />
            <InfoButton hero={hero} />
          </div>
        </div>
        {category_rows}
      </div>
    </>
  );
}
