import axios from "axios";
import { LOGIN } from "../../utilities/apiConstants";

export const LoginActions = {
  LOGIN_STARTED: "LOGIN_STARTED",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE"
};

export function loginAction(values) {
  return async dispatch => {
    try {
      dispatch({ type: LoginActions.LOGIN_STARTED });

      //await axios.get(LOGIN).then(res => {
      await axios.post(LOGIN, values).then(res => {
        if (res.status === 200 || res.status === 304) {
          let data = res.data;
          /*if (data.UserType === "Regular" || data.UserType === "Admin") {*/
          dispatch({ type: LoginActions.LOGIN_SUCCESS });
          /*}*/
        }
      });
    } catch (error) {
      console.log("Error ", error);
      dispatch({ type: LoginActions.LOGIN_FAILURE });
    }
  };
}
