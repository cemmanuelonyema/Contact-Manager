import axios from "axios";

export const contactApi = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const addContactApi = async (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await contactApi.post("/contacts", contact, config);
};

export const updateContactApi = async (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await contactApi.put(`/contacts/${contact.id}`, contact, config);
};

export const deleteContactApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await contactApi.delete(`/${id}`, config);
};
export const getContactsApi = async (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await contactApi.get("", contact, config);
};

//Auth

//register
export const registerUserApi = async (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await contactApi.post("/register", contact, config);
};
