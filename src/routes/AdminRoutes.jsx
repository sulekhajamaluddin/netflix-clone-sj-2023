//Node Modules
import { Routes, Route } from "react-router-dom";

//Project Files
import AdminHome from "../pages/admin/AdminHome";
import NotFound from "../pages/common/NotFound";

export default function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="*" element={<NotFound text={"page"} routePath={"/"} />} />
      </Routes>
    </>
  );
}
