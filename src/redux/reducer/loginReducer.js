import { LOGIN_USER } from "../constans/index";

function loginReducer(state = { users: {} }, action) {
  let newUser = [];
  switch (action.type) {
    case LOGIN_USER:
      newUser = { ...state, users: action.payload };
      break;

    default:
      break;
  }
  return newUser;
}
export default loginReducer;
