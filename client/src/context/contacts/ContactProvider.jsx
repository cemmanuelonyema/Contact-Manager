import React, { useReducer, createContext } from "react";

//types
import {
  ADD_CONTACT,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  TOGGLE_MODAL,
} from "../actiontypes";

import { contactReducer, INITIAL_STATE } from "./contactReducer";

//context Initialization
export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, INITIAL_STATE);
  const { contacts, current, filtered, modalOpen } = state;

  /************************************/
  //Actions
  /************************************/
  //ADD Contact
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

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
  //TOGGLE modal
  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL });
  };

  const value = {
    contacts,
    current,
    filtered,
    modalOpen,
    addContact,
    deleteContact,
    filterContacts,
    clearFilter,
    toggleModal,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
