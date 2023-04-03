//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="menu-holder">
        <FontAwesomeIcon className="bars" icon="fa-solid fa-bars" />
        <Link className="logo" to="/">
          <img className="logo" src={logo} alt="Netflix" />
        </Link>
      </div>
      <input placeholder="Search" aria-label="search bar" />
    </nav>
  );
}
