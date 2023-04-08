//Project Files
import logo from "../../assets/film_logo.png";
import InfoButton from "../../components/user/InfoButton";
import PlayButton from "../../components/user/PlayButton";
import Category from "../../components/user/Category";

export default function UserHome() {
  return (
    <main className="container">
      <div className="hero">
        <img
          className="background"
          src={
            "https://cdn.britannica.com/93/77293-050-CF984388/Russell-Crowe-Gladiator.jpg"
          }
          alt="Thumbnail"
        />
        <div className="overlay"></div>
      </div>
      <div className="content-container">
        <div className="title-logo flex-column">
          <img className="logo" src={logo} alt="logo" />
          <span className="title">GLADIATOR</span>
          <div className="button-holder">
            <PlayButton />
            <InfoButton />
          </div>
        </div>
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </main>
  );
}
