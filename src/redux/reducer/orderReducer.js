import { INCREMENT_ORDER } from "../constans/index";

function orderReducer(state = { orders: [] }, action) {
  let newState = {};

  switch (action.type) {
    case INCREMENT_ORDER:
      newState = { ...state, orders: action.payload };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
}

export default orderReducer;
