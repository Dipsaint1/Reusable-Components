/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "./Reducers";
import { CLOSE_MODAL, OPEN_MODAL } from "./Actions";

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
const initialState = {
  currentUser,
  modalIsOpen: false
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  function openModal() {dispatch({ type: OPEN_MODAL })}
  function closeModal() {dispatch({ type: CLOSE_MODAL })}

  const value = {
    ...state, initialState, dispatch, openModal, closeModal
  }

  
  return (
    <GlobalStateContext.Provider value={value}>
      { children }
    </GlobalStateContext.Provider>
  )
}

export const UseGlobalContext = () => {
  return useContext(GlobalStateContext);
}