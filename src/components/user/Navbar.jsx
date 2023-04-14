//Node Modules
import { useRef, useState } from "react";

//Project Files
import { useTitles } from "../../state/TitlesProvider";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import MenuRight from "./MenuRight";

export default function Navbar() {
  //Global state
  const navRef = useRef();
  const { titles, setTitlesType, setSearchedTitles } = useTitles();
  //Local state
  const [isActive, setIsActive] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  //Properties
  const className = isActive ? "nav-container active" : "nav-container";

  //Methods
  function findMatchingTitles() {
    const result = titles.filter((title) =>
      title.heading.toLowerCase().includes(searchWord.toLowerCase())
    );
    return result;
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
      <PrimaryMenu />
      <SecondaryMenu />
      <MenuRight search={[searchWord, setSearchWord]} />
    </nav>
  );
}
