//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoButton() {
  return (
    <button className="info-btn flex-center">
      <FontAwesomeIcon className="info" icon="fa-solid fa-circle-info" />
      <span>More info</span>
    </button>
  );
}
