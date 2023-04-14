//Project Files
import { useTitles } from "../../state/TitlesProvider";
import { useModal } from "../../state/ModalProvider";
import EmptyContent from "../admin/EmptyContent";
import getTitleLogo from "../../scripts/utils/getTitleLogo";
import TitleDetails from "./TitleDetails";

export default function SearchResults() {
  //Global state
  const { searchedTitles } = useTitles();
  const { openModal, setModalStyle } = useModal();

  //Properties
  const message = "Sorry, there are no titles with this name.";

  const articles = searchedTitles.map((title) => {
    const titleLogo = getTitleLogo(title);
    return (
      <article
        className="title-card"
        key={title.id}
        onClick={() => {
          setModalStyle("title-window");
          openModal(<TitleDetails title={title} />);
        }}
      >
        <img src={title.thumbnailURL} alt="thumbnail" />
        <img className="title-logo-image" src={titleLogo} alt="title logo" />
        {/* <span className="heading">{title.heading}</span> */}
      </article>
    );
  });

  return (
    <div className="search-container">
      {searchedTitles.length === 0 && <EmptyContent message={message} />}
      <div className="grid">{articles}</div>
    </div>
  );
}
