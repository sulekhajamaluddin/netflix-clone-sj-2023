import logo from "../../assets/film_logo.png";
import InfoButton from "../../components/user/InfoButton";
import PlayButton from "../../components/user/PlayButton";
import Category from "../../components/user/Category";

export default function DefaultView() {
  const heroSrc =
    "https://m.media-amazon.com/images/M/MV5BMmFkMGMwZGUtMDUwYy00MjdjLTllZWEtODdiZDc2Yjc0NDVmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg";
  return (
    <>
      <div className="hero">
        <img className="background" src={heroSrc} alt="Thumbnail" />
        <div className="overlay"></div>
      </div>
      <div className="content-container">
        <div className="title-logo flex-column">
          <img className="logo" src={logo} alt="logo" />
          <span className="title">The Pursuit Of Happyness</span>
          <div className="button-container">
            <PlayButton />
            <InfoButton />
          </div>
        </div>
        <Category type={"Popular on Netflix"} css={"first-row"} />
      </div>
      {/* <Category css={"second-row"} />
        <Category />
        <Category /> */}
    </>
  );
}
