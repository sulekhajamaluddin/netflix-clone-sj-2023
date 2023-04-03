//Project Files
import "./styles/styles.scss";
import Modal from "./components/common/Modal";
import SignedInRoutes from "./routes/SignedInRoutes";
import SignedOutRoutes from "./routes/SignedOutRoutes";
import { useUser } from "./state/UserProvider";

export default function App() {
  const { uid } = useUser();

  return (
    <>
      {!uid && <SignedOutRoutes />}
      {uid && <SignedInRoutes />}
      <Modal />
    </>
  );
}
