//Project Files
import { useModal } from "../../state/ModalProvider";
import SeriesDetails from "./SeriesDetails";
import PlayButton from "./PlayButton";

export default function TitleDetails({ title }) {
  const { closeModal } = useModal();

  return (
    <div className="title-details">
      <div className="bg">
        <img src={title.backgroundURL} alt="Background" />
        <div className="overlay"></div>
        <div className="corner-overlay"></div>
        <button className="close" onClick={() => closeModal()}>
          X
        </button>
        <PlayButton />
      </div>
      <div className="details">
        <span className="heading block">{title.heading}</span>
        <p>{title.description}</p>
        {title.category === "series" && <SeriesDetails series={title} />}
      </div>
    </div>
  );
}
