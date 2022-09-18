import React, { useReducer, createContext } from "react";
import { contactApi } from "../../api/contactApi";
import { setAuthToken } from "../../utils/setAuthToken";
import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actiontypes";

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
      const res = await contactApi.post("/register", form, config);
      console.log(res);
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
      const res = await contactApi.post("/login", form, config);
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data }); // res.data = token
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  //Log out User
  const logoutUser = () => {
    dispatch({ type: LOGOUT });
  };

  //Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await contactApi.get("/login");
      console.log(res);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  //Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  const value = {
    token,
    isAuthenticated,
    loading,
    user,
    error,
    registerUser,
    loginUser,
    logoutUser,
    clearErrors,
    loadUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
