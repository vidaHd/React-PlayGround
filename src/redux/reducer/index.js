import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import logiReducer from "./loginReducer";
import reciveVisit from "./reciveReducer";

const rootReducer = combineReducers({
  orderReducer,
  logiReducer,
  reciveVisit,
});

export default rootReducer;
