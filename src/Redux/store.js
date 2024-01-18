import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./LoginForm/reducer";

const rootReducer = combineReducers({ reducer });

export const store = legacy_createStore(rootReducer);
