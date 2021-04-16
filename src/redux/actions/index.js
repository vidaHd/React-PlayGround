import INCREMENT_ORDER from "../constans/index";

export const incrementOrderAction = ({ payload, disPatch }) =>
  disPatch({
    type: INCREMENT_ORDER,
    payload: payload,
  });
