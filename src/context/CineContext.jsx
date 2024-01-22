/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { CineReducer } from "../reducers/CineReducer";

export const CineContext = createContext(null);
export const CineDispatcher = createContext(null);

export const CineContextProvider = ({ children }) => {
  const [carts, dispatch] = useReducer(CineReducer, []);
  return (
    <CineContext.Provider value={carts}>
      <CineDispatcher.Provider value={dispatch}>
        {children}
      </CineDispatcher.Provider>
    </CineContext.Provider>
  );
};

export const useCineContext = () => {
  return useContext(CineContext);
};

export const useCineDispatcher = () => {
  return useContext(CineDispatcher);
};
