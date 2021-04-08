import { combineReducers } from "redux";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  orderReducer,
});

export default rootReducer;
