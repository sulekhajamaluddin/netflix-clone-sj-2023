//Node Modules
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Project Files
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { useTitles } from "../../state/TitlesProvider";
import { useUser } from "../../state/UserProvider";
import clearLocalStorage from "../../scripts/localStorage/clearLocalStorage";
import toggleClass from "../../scripts/utils/toggleClass";

export default function Navbar() {
  //Global state
  const navRef = useRef();
  const navigate = useNavigate();
  const { dispatch, setCurrentUserId } = useUser();
  const { titles, setTitlesType, setSearchedTitles } = useTitles();
  //Local state
  const [isActive, setIsActive] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [state, setState] = useState(false);

  //Properties
  const className = isActive ? "nav-container active" : "nav-container";

  //Methods
  function findMatchingTitles() {
    const result = titles.filter((title) =>
      title.heading.toLowerCase().includes(searchWord.toLowerCase())
    );
    return result;
  }

  function handleChange(e) {
    setSearchWord(e.target.value);
  }

  function logout() {
    dispatch({
      type: "reset",
    });
    setCurrentUserId("");
    clearLocalStorage();
    navigate("/");
  }

  function changeBackground() {
    window.scrollY >= 40 ? setIsActive(true) : setIsActive(false);
  }

  window.addEventListener("scroll", changeBackground);

  document.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      const result = findMatchingTitles(searchWord);
      setTitlesType("search");
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
            <FontAwesomeIcon icon={"fa-solid fa-magnifying-glass"} />
          </button>
        </div>
        <Link className="children">Children</Link>
        <FontAwesomeIcon className="bell" icon={"fa-solid fa-bell"} />
        <div
          className="avatar-holder"
          onClick={() => {
            setState(!state);
          }}
        >
          <img className="avatar" src={avatar} alt="Avatar" />
          <FontAwesomeIcon className="caret" icon={"fa-solid fa-caret-down"} />
        </div>
        {state && (
          <button className="logout" onClick={() => logout()}>
            Sign out of Netflix
          </button>
        )}
      </div>
    </nav>
  );
}
