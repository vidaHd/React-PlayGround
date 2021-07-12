import { RECIVE_VISIT } from "../constans/index";

function reciveVisit(state = { visit: [] }, action) {
  let myVisit = {};

  switch (action.type) {
    case RECIVE_VISIT:
      myVisit = { ...state, visit: action.payload };
      break;

    default:
      myVisit = state;
      break;
  }
  return myVisit;
}
export default reciveVisit;
