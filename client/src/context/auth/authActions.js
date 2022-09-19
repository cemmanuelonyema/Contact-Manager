import { registerUserApi } from "../../api/contactApi";

export const registerUser1 = async (dispatch, formData) => {
  try {
    const res = await contactApi.post("/register", formData, config);
    console.log(res);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data }); // res.data = token
    loadUser();
  } catch (err) {
    dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
  }
};

// Register User
export const registerUser = async (dispatch, formData) => {
  try {
    const res = await registerUserApi(formData);
    console.log(res);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });

    // loadUser(dispatch);
  } catch (err) {
    console.log(err);
    dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
  }
};
