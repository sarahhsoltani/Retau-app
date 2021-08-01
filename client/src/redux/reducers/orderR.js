import { GET_ORDER,POST_ORDER } from "../actions/types"

const initialState = {
orders:[]
}

export const orderReducer =  (state = initialState, action) => {
    const { type, payload }=action
    switch (type) {

    case GET_ORDER:
        return { ...state, 
            orders:payload
        }
        case POST_ORDER :
     return {
      ...state,
      orders: [...state.orders, payload]

     }
    default:
        return state
    }
}
