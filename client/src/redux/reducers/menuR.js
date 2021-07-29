import {ADD_MENU,GET_MENU,DELETE_MENU, UPDATE_MENU} from "../actions/types"
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
     case DELETE_MENU:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_MENU:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};

