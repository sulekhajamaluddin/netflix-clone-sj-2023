// Node modules
import { useState, createContext, useContext } from "react";

//Properties
const Context = createContext(null);

export function ModalProvider({ children }) {
  //State
  const [modal, setModal] = useState(null);
  const [modalStyle, setModalStyle] = useState("window");

  function openModal(content) {
    setModal(content);
  }

  function closeModal() {
    setModal(null);
  }

  //Properties
  const values = { modal, openModal, closeModal, modalStyle, setModalStyle };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useModal() {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useModal only works if the parent component is wrapped in <ModalProvider>"
    );

  return context;
}
