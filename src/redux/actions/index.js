import { INCREMENT_ORDER } from "../constans/index";
import { DELETE_ORDER } from "../constans/index";

export const incrementOrderAction = ({ payload, disPatch }) =>
  disPatch({
    type: INCREMENT_ORDER,
    payload: payload,
  });
export const deleteOrderAction = ({ disPatch }) =>
  disPatch({
    type: DELETE_ORDER,
  });
