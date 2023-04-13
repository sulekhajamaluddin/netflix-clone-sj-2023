//Node Modules
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { useTitles } from "../../state/TitlesProvider";

export default function Navbar() {
  const navRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const { titles, setTitlesType, setSearchedTitles } = useTitles();
  const [searchWord, setSearchWord] = useState("");

  function toggleClass() {
    let element = document.querySelector(".menu");
    element.classList.toggle("menu-show");
  }

  function changeBackground() {
    window.scrollY >= 90 ? setIsActive(true) : setIsActive(false);
  }

  function findMatchingTitles() {
    console.log(searchWord);
    const result = titles.filter((title) =>
      title.heading.toLowerCase().includes(searchWord.toLowerCase())
    );
    return result;
  }

  function handleChange(e) {
    setSearchWord(e.target.value);
    setTitlesType("search");
  }

  window.addEventListener("scroll", changeBackground);
  const className = isActive ? "nav-container active" : "nav-container";

  document.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      const result = findMatchingTitles(searchWord);
      setSearchedTitles(result);
    }
  });

  return (
    <nav className={className} ref={navRef}>
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
      <div className="menu">
        <Link to={"/"} onClick={() => setTitlesType("default")}>
          Home
        </Link>
        <Link>Series</Link>
        <Link>Films</Link>
        <Link>New & Popular</Link>
        <Link>My list</Link>
        <Link className="browse">Browse by languages</Link>
      </div>
      <div className="right-menu">
        <div className="search">
          <input
            type="text"
            placeholder="Titles, people, genres"
            aria-label="search bar"
            value={searchWord}
            onChange={(e) => handleChange(e)}
            onBlur={() => setSearchWord("")}
          />
          <button className="glass">
            <FontAwesomeIcon
              // className="glass"
              icon={"fa-solid fa-magnifying-glass"}
            />
          </button>
        </div>
        <Link className="children">Children</Link>
        <FontAwesomeIcon className="bell" icon={"fa-solid fa-bell"} />
        <div className="avatar-holder">
          <img className="avatar" src={avatar} alt="Avatar" />
          <FontAwesomeIcon className="caret" icon={"fa-solid fa-caret-down"} />
        </div>
      </div>
    </nav>
  );
}
