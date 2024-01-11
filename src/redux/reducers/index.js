import addItem, { productReducers } from "./addItem";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  addItem,
  productReducers,
});

export default rootReducers;
