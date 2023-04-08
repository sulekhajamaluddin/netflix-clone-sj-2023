//Node Modules
import { useNavigate } from "react-router-dom";

//Project Files
import placeholder from "../../assets/placeholder.jpg";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import FormImage from "./form/FormImage";
import { useModal } from "../../state/ModalProvider";

export default function TitleCard({ title, path }) {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const thumbSrc = title.thumbnailURL === "" ? placeholder : title.thumbnailURL;
  const bgSource =
    title.backgroundURL === "" ? placeholder : title.backgroundURL;

  const imageFormThumb = <FormImage data={title} imageKey={"thumbnailURL"} />;
  const imageFormBg = <FormImage data={title} imageKey={"backgroundURL"} />;
  const routePath = `/${title.id}/seasons`;

  return (
    <article className="title-card">
      <h2>{title.heading}</h2>
      <div className="image-container">
        <div className="image">
          <span>Thumbnail</span>
          <img
            src={thumbSrc}
            alt="thumbnail"
            onClick={() => openModal(imageFormThumb)}
          />
        </div>
        <div className="image">
          <span>Background</span>
          <img
            src={bgSource}
            alt="background"
            onClick={() => openModal(imageFormBg)}
          />
        </div>
        <div className="btn-holder">
          <EditIcon title={title} />
          <DeleteIcon titleID={title.id} />
        </div>
      </div>
      {title.category === "series" && (
        <button className="add-btn" onClick={() => navigate(routePath)}>
          View seasons
        </button>
      )}
    </article>
  );
}
