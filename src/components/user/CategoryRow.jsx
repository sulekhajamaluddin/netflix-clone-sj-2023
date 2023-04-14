//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import { useTitles } from "../../state/TitlesProvider";
import handleSlider from "../../scripts/utils/slider";
import Title from "./Title";

export default function CategoryRow({ css, type }) {
  //Global state
  const { titles } = useTitles();

  //Properties
  const displayTitles = titles.filter((title) => title.sub_category === type);
  const items = displayTitles.map((title) => <Title title={title} />);

  return (
    <section className={`category ${css}`}>
      <h2>{type}</h2>
      <div className="card-holder">
        <button className="handle left-handle" onClick={(e) => handleSlider(e)}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </button>
        <div className="slider">{items}</div>
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
