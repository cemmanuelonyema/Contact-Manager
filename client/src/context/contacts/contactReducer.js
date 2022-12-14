import React from "react";
import {
  ADD_CONTACT,
  CLEAR_CURRENT_CONTACT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT_CONTACT,
  TOGGLE_MODAL,
  UPDATE_CONTACT,
} from "../actiontypes";

export const INITIAL_STATE = {
  contacts: [
    {
      id: 0,
      name: "Emmanuel Onyema",
      email: "onyemaceo@mail.com",
      phone: "07025053595",
      label: "professional",
      twitter: "https:twitter.com/ceonyema_",
      instagram: "i sta",
      linkedIn: "linked",
    },
    {
      id: 1,
      name: "sara watson1",
      email: "sara@gmail.com",
      phone: "222-333-2222",
      label: "friend",
      twitter: "",
      instagram: "",
      linkedIn: "Linked ",
    },
    {
      id: 2,
      name: "sara watson2",
      email: "sara@gmail.com",
      phone: "222-444-2222",
      label: "family",
      twitter: "",
      instagram: "",
      linkedIn: "",
    },
    {
      id: 3,
      name: "sara watson3",
      email: "sara@gmail.com",
      phone: "222-555-2222",
      label: "friend",
      twitter: "",
      instagram: "",
      linkedIn: "",
    },
    {
      id: 4,
      name: "sara watson4",
      email: "sara@gmail.com",
      phone: "222-666-2222",
      label: "family",
    },
    {
      id: 5,
      name: "sara watson5",
      email: "sara@gmail.com",
      phone: "222-777-2222",
      label: "professional",
      twitter: "",
      instagram: "",
      linkedIn: "",
    },
  ],
  current: null,
  filtered: null,
  modalOpen: false,
  current: null,
};

export const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        loading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        loading: false,
      };

    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          console.log("payload:", action.payload);
          const name = contact.name.match(regex);
          const email = contact.email.match(regex);
          const phone = contact.phone.match(regex);
          console.log("name:", name, "email:", email);
          return name || email || phone;
        }),
        loading: false,
      };
    case SET_CURRENT_CONTACT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        current: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    default:
      return state;
  }
};
