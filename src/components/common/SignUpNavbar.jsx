//Node Modules
import { Link } from "react-router-dom";
//Project Files
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar signup-navbar">
      <img className="logo" src={logo} alt="Netflix" />
      <Link className="authLink" to="/">
        Sign In
      </Link>
    </nav>
  );
}
