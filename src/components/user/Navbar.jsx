//Node Modules
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

export default function Navbar() {
  const navRef = useRef();
  const [isActive, setIsActive] = useState(false);

  function toggleClass() {
    let element = document.querySelector(".menu");
    element.classList.toggle("menu-show");
  }

  function changeBackground() {
    window.scrollY >= 90 ? setIsActive(true) : setIsActive(false);
  }

  window.addEventListener("scroll", changeBackground);
  const className = isActive ? "nav-container active" : "nav-container";

  return (
    <nav className={className} ref={navRef}>
      <div className="menu-holder">
        <FontAwesomeIcon
          className="bars"
          icon="fa-solid fa-bars"
          onClick={() => toggleClass()}
        />
        <Link className="logo" to="/">
          <img className="logo" src={logo} alt="Netflix" />
        </Link>
      </div>
      <div className="menu">
        <Link>Home</Link>
        <Link>Series</Link>
        <Link>Films</Link>
        <Link>New & Popular</Link>
        <Link>My list</Link>
        <Link>Browse by languages</Link>
      </div>
      <div className="search">
        <input placeholder="Search" aria-label="search bar" />
        <FontAwesomeIcon
          className="glass"
          icon={"fa-solid fa-magnifying-glass"}
        />
        <Link className="children">Children</Link>
        <FontAwesomeIcon className="glass" icon={"fa-solid fa-bell"} />
        <div className="avatar-holder">
          <img className="avatar" src={avatar} alt="Avatar" />
          <FontAwesomeIcon className="caret" icon={"fa-solid fa-caret-down"} />
        </div>
      </div>
    </nav>
  );
}
