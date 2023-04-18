//Project files
import { useModal } from "../../state/ModalProvider";
import getTitleLogo from "../../scripts/utils/getTitleLogo";
import TitleDetails from "./TitleDetails";
import placeholder from "../../assets/placeholder.jpg";

const Title = ({ title }) => {
  //Global state
  const { setModalStyle, openModal } = useModal();
  const { id, thumbnailURL } = title;

  //Properties
  const titleLogo = getTitleLogo(title);
  const thumbSrc = thumbnailURL === "" ? placeholder : thumbnailURL;

  //Methods
  function handleModal() {
    setModalStyle("title-window");
    openModal(<TitleDetails title={title} />);
  }

  return (
    <article className="title-card" key={id} onClick={() => handleModal()}>
      <img src={thumbSrc} alt="thumbnail" />
      <img className="title-logo-image" src={titleLogo} alt="title logo" />
      <span className="heading">{title.heading}</span>
    </article>
  );
};
export default Title;
