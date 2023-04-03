//Node Modules
import { Link } from "react-router-dom";

export default function AdminHome() {
  //Properties
  const categories = ["series", "documentary", "film"];

  //Components
  const Categories = categories.map((category) => (
    <Link
      to={`/${category}`}
      key={category}
      className="category-card flex-center"
    >
      {category}
    </Link>
  ));

  return (
    <div className="admin-home flex-column-center">
      <h1>Admin Category Page</h1>
      <section className="grid">{Categories}</section>
    </div>
  );
}
