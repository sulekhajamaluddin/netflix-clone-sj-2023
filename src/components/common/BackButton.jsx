//Node Modules
import { useNavigate } from "react-router-dom";

export default function BackButton({ goToLocation }) {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(goToLocation)}>
      Go back
    </button>
  );
}
