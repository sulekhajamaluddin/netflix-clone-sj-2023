//Node Modules
import { useNavigate } from "react-router-dom";
//Project Files
import placeholder from "../../assets/placeholder.jpg";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import FormImage from "./form/FormImage";
import { useModal } from "../../state/ModalProvider";

export default function TitleCard({ title }) {
  //Global state
  const { openModal } = useModal();
  const navigate = useNavigate();

  //Properties
  const thumbSrc = title.thumbnailURL === "" ? placeholder : title.thumbnailURL;
  const bgSource =
    title.backgroundURL === "" ? placeholder : title.backgroundURL;
  const imageFormThumb = <FormImage data={title} imageKey={"thumbnailURL"} />;
  const imageFormBg = <FormImage data={title} imageKey={"backgroundURL"} />;
  const routePath = `/${title.id}/seasons`;

  //Components
  const thumbnailImg = (
    <img src={thumbSrc} alt="thumb" onClick={() => openModal(imageFormThumb)} />
  );

  const backgroundImg = (
    <img src={bgSource} alt="hero" onClick={() => openModal(imageFormBg)} />
  );

  const viewSeasonsButton = (
    <button className="view-btn" onClick={() => navigate(routePath)}>
      View seasons
    </button>
  );

  return (
    <article className="admin-title-card">
      <span>
        <b>Name</b> : {title.heading}
      </span>
      <div className="image-container">
        <label className="image">Thumbnail {thumbnailImg}</label>
        <label className="image">Background {backgroundImg}</label>
        <div className="btn-holder">
          <EditIcon title={title} />
          <DeleteIcon id={title.id} path={"titles"} type={"title"} />
        </div>
      </div>
      {title.category === "series" && viewSeasonsButton}
    </article>
  );
}
