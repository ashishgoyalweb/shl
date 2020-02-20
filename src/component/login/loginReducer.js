import { LoginActions } from "./loginAction";

let initialState = {
  loading: false,
  isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_STARTED:
      return { ...state, loading: true };
    case LoginActions.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, loading: false };
    case LoginActions.LOGIN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
