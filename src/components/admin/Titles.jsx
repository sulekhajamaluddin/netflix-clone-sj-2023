//Project Files
import TitleCard from "./TitleCard";
import AddButton from "./AddButton";
import BackButton from "../common/BackButton";
import EmptyContent from "./EmptyContent";

export default function Titles({ type, titles }) {
  //Properties
  const path = "titles";
  const message = `You do not have any titles under ${type}`;

  //Components
  const Titles = titles.map((title) => (
    <TitleCard key={title.id} title={title} path={path} />
  ));

  return (
    <div className="title-category flex-column-center">
      <section className="header">
        <h1>Title Category</h1>
        <span>{`${type}`}</span>
      </section>
      <div className="btn-holder">
        <AddButton path={path} type={type} text={"title"} />
        <BackButton goToLocation={"/"} />
      </div>
      {titles.length === 0 && <EmptyContent message={message} />}
      {Titles}
    </div>
  );
}
