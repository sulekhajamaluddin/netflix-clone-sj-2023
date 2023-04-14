//Project files
import docLogo from "../../assets/doc_logo.png";
import filmLogo from "../../assets/film_logo.png";
import seriesLogo from "../../assets/series_logo.png";

export default function getTitleLogo(title) {
  let titleLogo;
  title.category === "documentary"
    ? (titleLogo = docLogo)
    : title.category === "film"
    ? (titleLogo = filmLogo)
    : (titleLogo = seriesLogo);
  return titleLogo;
}
