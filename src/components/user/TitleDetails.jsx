//Node modules
import { useNavigate } from "react-router-dom";
//Project Files
import { useModal } from "../../state/ModalProvider";
import SeriesDetails from "./SeriesDetails";
import PlayButton from "./PlayButton";

export default function TitleDetails({ title }) {
  const { closeModal } = useModal();
  const navigate = useNavigate();

  function handleClick(id, url) {
    closeModal();
    navigate(`/${id}/player`, { state: { url: url } });
  }

  return (
    <div className="title-details">
      <section className="bg">
        <img src={title.backgroundURL} alt="Background" />
        <div className="overlay"></div>
        <div className="corner-overlay"></div>
        <button className="close" onClick={() => closeModal()}>
          X
        </button>
        {title.category !== "series" && (
          <PlayButton handleClick={() => handleClick(title.id, title.url)} />
        )}
      </section>
      <section className="details">
        <span className="heading block">{title.heading}</span>
        <p>{title.description}</p>
        {title.category === "series" && <SeriesDetails series={title} />}
      </section>
    </div>
  );
}
