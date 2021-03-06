import { INCREMENT_ORDER } from "../constans/index";
import { DELETE_ORDER } from "../constans/index";
import { LOGIN_USER } from "../constans/index";
import { LOG_OUT } from "../constans/index";
import { RECIVE_VISIT } from "../constans/index";

export const incrementOrderAction = ({ payload, disPatch }) =>
  disPatch({
    type: INCREMENT_ORDER,
    payload: payload,
  });

export const deleteOrderAction = ({ disPatch }) =>
  disPatch({
    type: DELETE_ORDER,
  });

export const loginUser = ({ payload, disPatch }) =>
  disPatch({
    type: LOGIN_USER,
    payload: payload,
  });

export const logOut = ({ disPatch }) =>
  disPatch({
    type: LOG_OUT,
  });

export const reciveVisit = ({ payload, disPatch }) =>
  disPatch({
    type: RECIVE_VISIT,
    payload,
  });
