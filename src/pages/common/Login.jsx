//Node Modules
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
//Project Files
import loginUser from "../../scripts/authentication/loginUser";
import { useUser } from "../../state/UserProvider";
import { readDocument } from "../../scripts/firestore/readDocument";
import authData from "../../data/authData.json";
import FormFieldGenerator from "../../components/common/form/FormFieldGenerator";
import setUserSession from "../../scripts/utils/setUserSession";

export default function Login() {
  const navigate = useNavigate();
  const { setCurrentUserId, dispatch } = useUser();
  const formRef = useRef();

  async function onSubmit(event) {
    event.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    const result = await loginUser(email, password);
    result.status ? onSuccess(result) : onFailure(result);
  }

  async function onSuccess(result) {
    const currentUserId = result.payload;
    setCurrentUserId(currentUserId);
    const userData = await readDocument("users", currentUserId);
    userData.status === "success"
      ? setUserSession(dispatch, currentUserId, userData) && navigate("/")
      : onFailure({ message: "Something went wrong!!" });
  }

  function onFailure(result) {
    alert(`Cannot login, ${result.message}`);
  }

  return (
    <div className="login-container">
      <div className="login flex-column">
        <h1>Sign In</h1>
        <form ref={formRef} className="form" onSubmit={(e) => onSubmit(e)}>
          <FormFieldGenerator data={authData} />
          <input type="submit" value={"Sign In"}></input>
        </form>
        <div className="link flex-column">
          <Link to="/recover-password">Forgot password?</Link>
          <span className="lead-signup">
            New to Netflix??<Link to="/signup">Sign up now</Link>
          </span>
          <span className="captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="blue">Learn more.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
