//Node Modules
import { Link } from "react-router-dom";

export default function AdminHome() {
  //Properties
  const categories = ["series", "documentary", "film"];

  //Components
  const Categories = categories.map((category) => {
    return (
      <Link to={`/${category}`} key={category} className="card">
        {category}
      </Link>
    );
  });

  return (
    <div className="admin-home flex-column-center">
      <h1>Admin Home</h1>
      <Link className="link" to={"/sort-titles"}>
        Manage Display Categories
      </Link>
      <section className="grid">{Categories}</section>
    </div>
  );
}
