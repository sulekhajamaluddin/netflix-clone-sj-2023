// Node modules
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import { createAccount } from "../../scripts/authentication/createAccount";
import { createDocumentManualID } from "../../scripts/firestore/createDocumentManualID";
import { useUser } from "../../state/UserProvider";
import authData from "../../data/authData.json";
import FormFieldGenerator from "../../components/common/form/FormFieldGenerator";
import setLocalStorage from "../../scripts/localStorage/setLocalStorage";

export default function SignUp() {
  // Global state
  const navigate = useNavigate();
  const { setCurrentUserId, dispatch } = useUser();
  const formRef = useRef();

  // Methods
  async function onSubmit(event) {
    event.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    const result = await createAccount(email, password);
    result.status ? onSuccess(result, email) : onFailure(result);
  }

  async function onSuccess(result, email) {
    const currentUserId = result.payload;
    const user = { email: email, role: "user" };
    await createDocumentManualID("users", currentUserId, user);
    setCurrentUserId(currentUserId);
    dispatch({ type: "initialise", payload: user });
    await setLocalStorage("uid", currentUserId);
    await setLocalStorage("user", user);
    navigate("/");
  }

  function onFailure(result) {
    alert(`Cannot create an account, ${result.message}`);
  }

  return (
    <div className="sign-up flex-column">
      <span className="step-indicator">
        STEP <b>1</b> OF <b>3</b>
      </span>
      <h1>Create a password to start your membership.</h1>
      <span>Just a few more steps and you're finished!</span>
      <span>We hate paperwork, too.</span>
      <form ref={formRef} className="form" onSubmit={(e) => onSubmit(e)}>
        <FormFieldGenerator data={authData} />
        <input type="submit"></input>
      </form>
    </div>
  );
}
