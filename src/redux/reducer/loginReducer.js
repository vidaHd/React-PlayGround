import { LOGIN_USER } from "../constans/index";

function loginReducer(state = { users: {} }, action) {
  let newUser = {};

  switch (action.type) {
    case LOGIN_USER:
      newUser = { ...state, users: action.payload };
      break;

    default:
      newUser = state;
      break;
  }
  return newUser;
}
export default loginReducer;
