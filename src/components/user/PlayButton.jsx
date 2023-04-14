//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlayButton({ handleClick }) {
  return (
    <button className="play-btn flex-center" onClick={handleClick}>
      <FontAwesomeIcon className="play" icon="fa-solid fa-play" />
      <span className="text">Play</span>
    </button>
  );
}
