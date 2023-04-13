// Node modules
import { useContext } from "react";
import { createContext, useReducer } from "react";
import TitlesReducer from "../state/Reducer";
import SeasonsReducer from "../state/Reducer";

//Properties
const Context = createContext(null);

export function TitlesProvider({ children }) {
  //State
  const [titles, titlesDispatch] = useReducer(TitlesReducer, []);
  const [seasons, seasonsDispatch] = useReducer(SeasonsReducer, []);

  //Properties
  const values = {
    titles,
    titlesDispatch,
    seasons,
    seasonsDispatch,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useTitles() {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useTitles only works if the parent component is wrapped in <TitlesProvider>"
    );

  return context;
}
