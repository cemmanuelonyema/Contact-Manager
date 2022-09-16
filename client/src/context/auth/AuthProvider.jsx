import axios from "axios";
import React, { useReducer, createContext } from "react";
import { LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../actiontypes";

import { authReducer, INITIAL_STATE } from "./authReducer";

//context Initialization
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const { token, isAuthenticated, user, loading, error } = state;

  /************************************/
  //Actions
  /************************************/
  //Register user
  const registerUser = async (form) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/register", form, config);
      console.log(res.data);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data }); // res.data = token
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };
  //Login user
  const loginUser = async (form) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/login", form, config);
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data }); // res.data = token
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  const value = {
    token,
    isAuthenticated,
    loading,
    user,
    error,
    registerUser,
    loginUser,
    // loadUser,
    // logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
