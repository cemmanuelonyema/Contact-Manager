import React from "react";
import { DELETE_CONTACT } from "../actiontypes";

export const INITIAL_STATE = {
  contacts: [
    {
      id: 0,
      name: "Emmanuel Onyema",
      email: "onyemaceo@mail.com",
      phone: "07025053595",
      contact_label: "personal",
    },
    {
      id: 1,
      name: "sara watson1",
      email: "sara@gmail.com",
      phone: "222-333-2222",
      contact_label: "personal",
    },
    {
      id: 2,
      name: "sara watson2",
      email: "sara@gmail.com",
      phone: "222-444-2222",
      contact_label: "personal",
    },
    {
      id: 3,
      name: "sara watson3",
      email: "sara@gmail.com",
      phone: "222-555-2222",
      contact_label: "personal",
    },
    {
      id: 4,
      name: "sara watson4",
      email: "sara@gmail.com",
      phone: "222-666-2222",
      contact_label: "personal",
    },
    {
      id: 5,
      name: "sara watson5",
      email: "sara@gmail.com",
      phone: "222-777-2222",
      contact_label: "professional",
    },
  ],
  current: null,
};

export const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        loading: false,
      };

    default:
      return state;
  }
};
