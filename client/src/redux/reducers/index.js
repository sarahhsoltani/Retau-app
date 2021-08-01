import { combineReducers } from "redux";
import {menuReducer} from "./menuR";
import {orderReducer} from "./orderR"

export const rootReducer = combineReducers({
    menuReducer,
    orderReducer
})