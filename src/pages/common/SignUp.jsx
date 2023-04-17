// Node modules
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import { createAccount } from "../../scripts/authentication/createAccount";
import { createDocumentManualID } from "../../scripts/firestore/createDocumentManualID";
import setLocalStorage from "../../scripts/localStorage/setLocalStorage";
import { useUser } from "../../state/UserProvider";
import fields from "../../data/authFields.json";
import data from "../../data/authData.json";
import FormFieldGenerator from "../../components/common/form/FormFieldGenerator";

// good but a bit too long
export default function SignUp() {
  // Global state
  const navigate = useNavigate();
  const { setCurrentUserId, dispatch } = useUser();
  const formRef = useRef();
  //Local state
  const [form, setForm] = useState(data);

  // Methods
  async function onSubmit(event) {
    event.preventDefault();
    const result = await createAccount(form.email, form.password);
    result.status ? onSuccess(result, form.email) : onFailure(result);
  }

  async function onSuccess(result, email) {
    const currentUserId = result.payload;
    const user = { email: email, role: "user" };
    await createDocumentManualID("users", currentUserId, user);
    setCurrentUserId(currentUserId);
    dispatch({ type: "initialise", payload: user });
    // should uid be a property inside user?
    await setLocalStorage("uid", currentUserId);
    await setLocalStorage("user", user);
    navigate("/");
  }

  function onFailure(result) {
    alert(`Cannot create an account, ${result.message}`);
  }

  return (
    <div className="signup-container">
      <div className="sign-up flex-column">
        <span className="step-indicator">
          STEP <b>1</b> OF <b>3</b>
        </span>
        <h1>Create a password to start your membership.</h1>
        <span>Just a few more steps and you're finished!</span>
        <span>We hate paperwork, too.</span>
        <form ref={formRef} className="form" onSubmit={(e) => onSubmit(e)}>
          <FormFieldGenerator fields={fields} state={[form, setForm]} />
          <input type="submit" value="Next"></input>
        </form>
      </div>
    </div>
  );
}
