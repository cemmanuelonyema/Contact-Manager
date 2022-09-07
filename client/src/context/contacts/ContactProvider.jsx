import React, { useReducer, createContext } from "react";

//types
import { DELETE_CONTACT } from "../actiontypes";

import { contactReducer, INITIAL_STATE } from "./contactReducer";

//context Initialization
export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, INITIAL_STATE);
  const { contacts, current } = state;

  /************************************/
  //Actions
  /************************************/
  //DELETE Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const value = { contacts, current, deleteContact };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
