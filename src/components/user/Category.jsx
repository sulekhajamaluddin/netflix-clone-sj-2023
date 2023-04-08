//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import handleSlider from "../../scripts/utils/slider";

export default function Category() {
  return (
    <section className="category">
      {/*Note:  No h1 */}
      <h2>Popular on Netflix</h2>
      <div className="card-holder">
        <button className="handle left-handle" onClick={(e) => handleSlider(e)}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </button>
        <div className="slider">
          <article className="title-card">1</article>
          <article className="title-card">2</article>
          <article className="title-card">3</article>
          <article className="title-card">4</article>
          <article className="title-card">5</article>
          <article className="title-card">6</article>
          <article className="title-card">7</article>
          <article className="title-card">8</article>
          <article className="title-card">9</article>
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
