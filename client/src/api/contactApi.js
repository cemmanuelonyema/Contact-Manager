import axios from "axios";

export const contactApi = axios.create({
  baseURL: "/api/v1/contacts",
});

export const addContactApi = async (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await contactApi.post("", contact, config);
};

export const updateContactApi = async (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await contactApi.put(`/${contact.id}`, contact, config);
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
