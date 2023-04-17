//Node Modules
import { Routes, Route } from "react-router-dom";

//Project Files
import Navbar from "../components/user/Navbar";
import NotFound from "../pages/common/NotFound";
import UserHome from "../pages/user/UserHome";
import VideoPlayer from "../pages/user/VideoPlayer";

// good
export default function UserRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserHome />} />
        {/* excellent approach for the video player just put player first, then the id */}
        {/* /player/:id */}
        <Route path="/:id/player" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound text={"page"} routePath={"/"} />} />
      </Routes>
    </>
  );
}
