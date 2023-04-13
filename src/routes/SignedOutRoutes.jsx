//Node Modules
import { Routes, Route } from "react-router-dom";

//Project Files
import Layout from "./Layout";
import LoginNavbar from "../components/common/LoginNavbar";
import SignUpNavbar from "../components/common/SignUpNavbar";
import RecoverNavbar from "../components/common/RecoverNavbar";
import Login from "../pages/common/Login";
import SignUp from "../pages/common/SignUp";
import NotFound from "../pages/common/NotFound";
import RecoverPassword from "../pages/common/RecoverPassword";
import VideoPlayer from "../pages/user/VideoPlayer";

export default function SignedOutRoutes() {
  const loginState = { navbar: <LoginNavbar />, component: <Login /> };
  const signUpState = { navbar: <SignUpNavbar />, component: <SignUp /> };
  const recoverState = {
    navbar: <RecoverNavbar />,
    component: <RecoverPassword />,
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout state={loginState} />} />
        <Route path="/signup" element={<Layout state={signUpState} />} />
        <Route path="/recover" element={<Layout state={recoverState} />} />
        <Route path="/player" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound text={"page"} routePath={"/"} />} />
      </Routes>
    </>
  );
}
