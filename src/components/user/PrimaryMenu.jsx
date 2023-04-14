//Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
//Project Files
import toggleClass from "../../scripts/utils/toggleClass";
import logo from "../../assets/logo.png";
import { useTitles } from "../../state/TitlesProvider";

export default function PrimaryMenu() {
  //Global state
  const { setTitlesType } = useTitles();
  return (
    <div className="menu-holder">
      <FontAwesomeIcon
        className="bars"
        icon="fa-solid fa-bars"
        onClick={() => toggleClass()}
      />
      <Link className="logo" to="/" onClick={() => setTitlesType("default")}>
        <img className="logo" src={logo} alt="Netflix" />
      </Link>
    </div>
  );
}
