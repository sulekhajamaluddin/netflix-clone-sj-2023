//Project Files
import setLocalStorage from "../../scripts/localStorage/setLocalStorage";

export default async function setUserSession(dispatch, userId, userData) {
  dispatch({ type: "initialise", payload: userData.data });
  await setLocalStorage("uid", userId);
  await setLocalStorage("user", userData.data);
}
