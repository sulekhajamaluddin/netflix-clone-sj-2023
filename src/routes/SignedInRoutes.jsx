//Project Files
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import { useUser } from "../state/UserProvider";

// good
export default function Router() {
  const { user } = useUser();

  return (
    <>
      {user?.role === "admin" && <AdminRoutes />}
      {user?.role === "user" && <UserRoutes />}
    </>
  );
}
