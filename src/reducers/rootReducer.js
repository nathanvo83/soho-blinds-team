import { combineReducers } from "redux";
import { menusReducer } from "./menusReducer";

export const rootReducer = combineReducers({
  menu: menusReducer
});
