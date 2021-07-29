import {ADD_MENU,GET_MENU} from "../actions/types"
const initialState={
  datas : [],
  loading:true
} 

 export const menuReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_MENU:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };

    case ADD_MENU:
     return {
      ...state,
      datas: [...state.datas, payload]

     }

  }
  return state
};

