//Node Modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Project Files
import { useUser } from "../../state/UserProvider";
import { readDocument } from "../../scripts/firestore/readDocument";
import loginUser from "../../scripts/authentication/loginUser";
import setUserSession from "../../scripts/utils/setUserSession";
import fields from "../../data/authFields.json";
import data from "../../data/authData.json";
import FormFieldGenerator from "../../components/common/form/FormFieldGenerator";

export default function Login() {
  //Global state
  const navigate = useNavigate();
  const { setCurrentUserId, dispatch } = useUser();

  //Local state
  const [form, setForm] = useState(data);

  async function onSubmit(event) {
    event.preventDefault();
    const result = await loginUser(form.email, form.password);
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
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <FormFieldGenerator fields={fields} state={[form, setForm]} />
          <input type="submit" value={"Sign In"}></input>
        </form>
        <div className="link flex-column">
          <Link className="help" to="/recover">
            Need help?
          </Link>
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
