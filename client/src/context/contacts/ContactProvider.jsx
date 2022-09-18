import React, { useReducer, createContext } from "react";
import {
  addContactApi,
  deleteContactApi,
  updateContactApi,
  getContactsApi,
} from "../../api/contactApi";

//types
import {
  ADD_CONTACT,
  CLEAR_CONTACTS,
  CLEAR_CURRENT_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  GET_CONTACTS,
  SET_CURRENT_CONTACT,
  TOGGLE_MODAL,
  UPDATE_CONTACT,
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
  const addContact = async (contact) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // try {
    //   const res = await contactApi.post("", contact, config);
    // console.log(res.data);
    // dispatch({ type: ADD_CONTACT, payload: res.data });
    // } catch (err) {}
    try {
      //   const res = await addContactApi(contact);
      //   console.log(res.data);
      dispatch({ type: ADD_CONTACT, payload: contact });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //DELETE Contact
  const deleteContact = async (id) => {
    try {
      //   const res = await deleteContactApi(id);
      //   dispatch({ type: DELETE_CONTACT, payload: res.data });

      //   await axios.delete(`/api/v1/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //UPDATE Contact
  const updateContact = async (contact) => {
    try {
      //   const res = await updateContactApi(contact.id);
      //   dispatch({ type: UPDATE_CONTACT, payload: res.data });

      //   const res = await axios.put(`/api/v1/contacts/${contact.id}`);
      dispatch({ type: UPDATE_CONTACT, payload: contact });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //GET Contact
  const getContacts = async (contact) => {
    try {
      const res = await getContactsApi(contact);
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //SET CURRENT CONTACT
  const setCurrentContact = (contact) => {
    dispatch({ type: SET_CURRENT_CONTACT, payload: contact });
  };

  //CLEAR CURRENT CONTACT
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT_CONTACT });
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
    updateContact,
    getContacts,
    setCurrentContact,
    clearCurrentContact,
    filterContacts,
    clearFilter,
    toggleModal,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
};
