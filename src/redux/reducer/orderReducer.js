import { INCREMENT_ORDER } from "../constans/index";
import { DELETE_ORDER } from "../constans/index";

function orderReducer(state = { orders: [] }, action) {
  let newState = {};
  let DeleteState = {};

  switch (action.type) {
    case INCREMENT_ORDER:
      newState = { ...state, orders: action.payload };
      break;
    case DELETE_ORDER:
      DeleteState = {
        newState,
      };
      break;
    default:
      newState = state;
      break;
  }

  return newState;
}

export default orderReducer;
