//Node Modules
import { Routes, Route } from "react-router-dom";

//Project Files
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import NotFound from "../pages/common/NotFound";
import UserHome from "../pages/user/UserHome";

export default function UserRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="*" element={<NotFound text={"page"} routePath={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}
