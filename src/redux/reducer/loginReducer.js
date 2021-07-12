import { LOGIN_USER } from "../constans/index";
import { LOG_OUT } from "../constans/index";

function loginReducer(state = { users: {} }, action) {
  let User = {};

  switch (action.type) {
    case LOGIN_USER:
      User = { ...state, users: action.payload };
      break;
    case LOG_OUT:
      User = { ...state, users: {} };
      break;

    default:
      User = state;
      break;
  }
  return User;
}
export default loginReducer;
