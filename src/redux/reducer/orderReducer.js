import INCREMENT_ORDER from "../constans/index";

function orderReducer(
  state = { orders: [{ id: 1, nameOrder: "vida", priceOrder: 20 }] },
  action
) {
  switch (action.type) {
    case INCREMENT_ORDER:
      return { ...state, orders: action.newOrders };

    default:
      break;
  }

  return state;
}

export default orderReducer;
