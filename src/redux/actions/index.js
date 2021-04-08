import INCREMENT_ORDER from "../constans/index";

export const Order = (orders) => ({
  type: INCREMENT_ORDER,
  payload: orders,
});
