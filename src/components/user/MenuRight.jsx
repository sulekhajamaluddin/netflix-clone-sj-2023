//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//Project files
import avatar from "../../assets/avatar.png";
import { useUser } from "../../state/UserProvider";
import clearLocalStorage from "../../scripts/localStorage/clearLocalStorage";

export default function MenuRight({ search }) {
  const [searchWord, setSearchWord] = search;
  const { dispatch, setCurrentUserId } = useUser();
  const navigate = useNavigate();

  //Local state
  const [state, setState] = useState(false);

  //Methods
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

  return (
    <div className="right-menu">
      <div className="search" tabIndex={0}>
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
      <div className="avatar-holder" onClick={() => setState(!state)}>
        <img className="avatar" src={avatar} alt="Avatar" />
        <FontAwesomeIcon className="caret" icon={"fa-solid fa-caret-down"} />
      </div>
      {state && (
        <button className="logout" onClick={() => logout()}>
          Sign out of Netflix
        </button>
      )}
    </div>
  );
}
