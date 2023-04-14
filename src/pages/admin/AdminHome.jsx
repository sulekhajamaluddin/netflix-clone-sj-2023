//Node Modules
import { Link, useNavigate } from "react-router-dom";

//Project Files
import { useUser } from "../../state/UserProvider";
import { useModal } from "../../state/ModalProvider";
import clearLocalStorage from "../../scripts/localStorage/clearLocalStorage";
import { useEffect } from "react";

export default function AdminHome() {
  //Global states
  const { dispatch, setCurrentUserId } = useUser();
  const { setModalStyle } = useModal();
  const navigate = useNavigate();

  //Properties
  const categories = ["series", "documentary", "film"];

  //Methods
  function logout() {
    dispatch({
      type: "reset",
    });
    setCurrentUserId("");
    clearLocalStorage();
    navigate("/");
  }

  useEffect(() => {
    setModalStyle("window");
  });

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
      <button className="logout" onClick={() => logout()}>
        Logout
      </button>
      <h1>Admin Home</h1>
      <Link className="link" to={"/sort-titles"}>
        Manage Display Categories
      </Link>
      <section className="grid">{Categories}</section>
    </div>
  );
}
