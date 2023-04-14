//Project files
import { useModal } from "../../state/ModalProvider";
import getTitleLogo from "../../scripts/utils/getTitleLogo";
import TitleDetails from "./TitleDetails";

const Title = ({ title }) => {
  //Global state
  const { setModalStyle, openModal } = useModal();
  const { id } = title;

  //Properties
  const titleLogo = getTitleLogo(title);

  //Methods
  function handleModal() {
    setModalStyle("title-window");
    openModal(<TitleDetails title={title} />);
  }

  return (
    <article className="title-card" key={id} onClick={() => handleModal()}>
      <img src={title.thumbnailURL} alt="thumbnail" />
      <img className="title-logo-image" src={titleLogo} alt="title logo" />
      <span className="heading">{title.heading}</span>
    </article>
  );
};
export default Title;
