import { LOGIN_USER } from "../constans/index";

function loginReducer(state = { users: {} }, action) {
  let User = {};

  switch (action.type) {
    case LOGIN_USER:
      User = { ...state, users: action.payload };
      break;

    default:
      User = state;
      break;
  }
  return User;
}
export default loginReducer;
