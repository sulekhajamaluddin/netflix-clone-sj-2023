//Node modules
import { Link } from "react-router-dom";
//Project files
import { useTitles } from "../../state/TitlesProvider";
export default function SecondaryMenu() {
  const { setTitlesType } = useTitles();
  return (
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
  );
}
