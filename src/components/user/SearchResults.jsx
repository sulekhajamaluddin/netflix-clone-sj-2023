//Project Files
import { useTitles } from "../../state/TitlesProvider";
import EmptyContent from "../admin/EmptyContent";
import Title from "./Title";

export default function SearchResults() {
  //Global state
  const { searchedTitles } = useTitles();

  //Properties
  const message = "Sorry, there are no titles with this name.";

  const items = searchedTitles.map((title) => (
    <Title title={title} key={title.id} />
  ));

  return (
    <div className="search-container">
      {searchedTitles.length === 0 && <EmptyContent message={message} />}
      <div className="row">{items}</div>
    </div>
  );
}
