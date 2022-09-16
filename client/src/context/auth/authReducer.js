import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actiontypes";

export const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
  loading: true,
  error: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
      return {
        ...state,
        ...action.payload, //put the token in state
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
