// Node modules
import { useRef } from "react";

// Project files
import { recoverAccount } from "../../scripts/authentication/recoverAccount";

// good
export default function RecoverPassword() {
  // Local state
  const formRef = useRef();

  // Methods
  async function onSubmit(event) {
    event.preventDefault();
    const email = formRef.current.email.value;
    const result = await recoverAccount(email);
    result.status ? onSucess() : onFailure(result);
  }

  function onSucess() {
    const text =
      "Email with a reset link sent. Please check your SPAM/Junk folder as well.";
    alert(text);
  }

  function onFailure(result) {
    alert(result.message);
  }

  return (
    <div className="recover-container">
      <div className="recover flex-column">
        <h1>Forgot Password</h1>
        <span>
          We will send you an email with instructions on how to reset your
          password.
        </span>
        <form ref={formRef} className="form" onSubmit={(e) => onSubmit(e)}>
          <input placeholder="name@example.com" type="email" name="email" />
          <input type="submit" value="Email me" />
        </form>
      </div>
    </div>
  );
}
