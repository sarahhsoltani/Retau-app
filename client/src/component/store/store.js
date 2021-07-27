import { createStore ,applyMiddleware} from "redux";
import {menuReducer} from "../reducers/menuR";
import thunk from "redux-thunk"
import { combineReducers } from "redux";


const Reducers = combineReducers({

  menustore: menuReducer


});

const store = createStore(Reducers,applyMiddleware(thunk));
export default store;