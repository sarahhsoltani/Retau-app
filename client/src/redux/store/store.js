// import { createStore ,applyMiddleware} from "redux";
// import {menuReducer} from "../reducers/menuR";
// import thunk from "redux-thunk"
// import { combineReducers } from "redux";


// const Reducers = combineReducers({

//   menustore: menuReducer


// });

// const store = createStore(Reducers,applyMiddleware(thunk));
// export default store;
import { createStore, applyMiddleware,compose } from "redux";
import { rootReducer } from "../reducers/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store;