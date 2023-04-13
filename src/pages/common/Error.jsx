// Node modules
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="alert-page flex-column-center">
      <h1>
        <span className="block">Sorry,something went wrong.</span>
        <span>Please try again, later.</span>
      </h1>
      <Link className="back-button" to="/">
        Go back
      </Link>
    </div>
  );
}
