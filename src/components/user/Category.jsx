//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Category() {
  return (
    <section className="category">
      {/*Note:  No h1 */}
      <h2>Popular on Netflix</h2>
      <div className="card-holder">
        <div className="handle left-handle">
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </div>
        <div className="slider">
          <article className="title-card"></article>
          <article className="title-card"></article>
          <article className="title-card"></article>
          <article className="title-card"></article>
          <article className="title-card"></article>
          <article className="title-card"></article>
          <article className="title-card"></article>
          <article className="title-card"></article>
          <article className="title-card"></article>
        </div>
        <div className="handle right-handle">
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </div>
      </div>
    </section>
  );
}
