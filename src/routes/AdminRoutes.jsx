//Node Modules
import { Routes, Route } from "react-router-dom";

//Project Files
import AdminHome from "../pages/admin/AdminHome";
import NotFound from "../pages/common/NotFound";
import TitleCategory from "../pages/admin/TitleCategory";
import SortTitles from "../pages/admin/SortTitles";
import Seasons from "../pages/admin/Seasons";

export default function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/:type" element={<TitleCategory />} />
        <Route path="/:id/seasons" element={<Seasons />} />
        <Route path="/sort-titles" element={<SortTitles />} />
        <Route path="*" element={<NotFound text={"page"} routePath={"/"} />} />
      </Routes>
    </>
  );
}
