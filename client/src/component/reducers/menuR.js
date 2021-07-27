import { MENU } from "../actions/types";
const menu = [];

export const menuReducer = (state = menu, action) => {
  if (action.type === MENU) {
    return {
      ...state,
      menu: action.payload
    
    };
  } else return state;
};

