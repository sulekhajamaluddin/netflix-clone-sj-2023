// Node modules
import { useState, useContext } from "react";
import { createContext, useReducer } from "react";
import getLocalStorage from "../scripts/localStorage/getLocalStorage";
import UserReducer from "../state/Reducer";

//Properties
const Context = createContext(null);

export function UserProvider({ children }) {
  //State
  const [user, dispatch] = useReducer(
    UserReducer,
    getLocalStorage("user") || null
  );
  const [uid, setUid] = useState(getLocalStorage("uid") || null);

  function setCurrentUserId(currentUid) {
    setUid(currentUid);
  }

  //Properties
  const values = {
    uid,
    setCurrentUserId,
    user,
    dispatch,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useUser() {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useUser only works if the parent component is wrapped in <UserProvider>"
    );

  return context;
}
