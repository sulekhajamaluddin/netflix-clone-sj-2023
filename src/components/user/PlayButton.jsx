//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlayButton() {
  return (
    <button className="play-btn flex-center">
      <FontAwesomeIcon className="play" icon="fa-solid fa-play" />
      <span className="text">Play</span>
    </button>
  );
}
