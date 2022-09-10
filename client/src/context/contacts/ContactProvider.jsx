import React, { useReducer, createContext } from "react";

//types
import {
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
} from "../actiontypes";

import { contactReducer, INITIAL_STATE } from "./contactReducer";

//context Initialization
export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, INITIAL_STATE);
  const { contacts, current, filtered } = state;

  /************************************/
  //Actions
  /************************************/
  //DELETE Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //FILTER Contact
  const filterContacts = (id) => {
    dispatch({ type: FILTER_CONTACTS, payload: id });
  };

  //CLEAR filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const value = {
    contacts,
    current,
    filtered,
    deleteContact,
    filterContacts,
    clearFilter,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
