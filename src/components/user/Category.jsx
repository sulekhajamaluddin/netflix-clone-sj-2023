//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

//Project Files
import handleSlider from "../../scripts/utils/slider";
import { useTitles } from "../../state/TitlesProvider";
import docLogo from "../../assets/doc_logo.png";
import filmLogo from "../../assets/film_logo.png";
import seriesLogo from "../../assets/series_logo.png";
import { useModal } from "../../state/ModalProvider";
import TitleDetails from "./TitleDetails";

export default function Category({ css, type }) {
  const { titles } = useTitles();
  const displayTitles = titles.filter((title) => title.sub_category === type);
  const { openModal } = useModal();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function getTitleLogo(title) {
    let titleLogo;
    title.category === "documentary"
      ? (titleLogo = docLogo)
      : title.category === "film"
      ? (titleLogo = filmLogo)
      : (titleLogo = seriesLogo);
    return titleLogo;
  }

  // useEffect(() => {
  //   if (modalIsOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [modalIsOpen]);

  const articles = displayTitles.map((title) => {
    const titleLogo = getTitleLogo(title);
    return (
      <article
        className="title-card"
        key={title.id}
        onClick={() => {
          setModalIsOpen(true);
          openModal(<TitleDetails title={title} />);
        }}
      >
        <img src={title.thumbnailURL} alt="thumbnail" />
        <img className="title-logo-image" src={titleLogo} alt="title logo" />
        {/* <span className="heading">{title.heading}</span> */}
      </article>
    );
  });

  return (
    <section className={`category ${css}`}>
      {/*Note:  No h1 */}
      <h2>{type}</h2>
      <div className="card-holder">
        <button className="handle left-handle" onClick={(e) => handleSlider(e)}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </button>
        <div className="slider">
          {articles}
          {/* <article className="title-card">1</article>
          <article className="title-card">2</article>
          <article className="title-card">3</article>
          <article className="title-card">4</article>
          <article className="title-card">5</article>
          <article className="title-card">6</article>
          <article className="title-card">7</article>
          <article className="title-card">8</article>
          <article className="title-card">9</article> */}
        </div>
        <button
          className="handle right-handle"
          onClick={(e) => handleSlider(e)}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </section>
  );
}
