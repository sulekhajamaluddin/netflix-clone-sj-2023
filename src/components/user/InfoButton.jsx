//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Project files
import { useModal } from "../../state/ModalProvider";
import TitleDetails from "./TitleDetails";

export default function InfoButton({ hero }) {
  const { setModalStyle, openModal } = useModal();
  function handleModal() {
    setModalStyle("title-window");
    openModal(<TitleDetails title={hero} />);
  }
  return (
    <button className="info-btn flex-center" onClick={() => handleModal()}>
      <FontAwesomeIcon className="info" icon="fa-solid fa-circle-info" />
      <span>More info</span>
    </button>
  );
}
