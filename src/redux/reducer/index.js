import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import logiReducer from "./loginReducer";

const rootReducer = combineReducers({
  orderReducer,
  logiReducer,
});

export default rootReducer;
