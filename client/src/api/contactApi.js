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
