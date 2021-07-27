
import axios from 'axios'
import { MENU } from "../actions/types";
// export function allMenu( ) {
//     return async dispatch =>{
//       try{
        
//     await  axios.get("http://localhost:6000/RestoApp/menu/get")
   
//     }
//     catch (error) {
//       console.log(error);
//     }
    
//   }
//   }

const menu = (payload) => ({
  type: MENU,
  payload,
});

export function allMenu() {
  return (dispatch) => axios.get("http://localhost:4000/RestoApp/menu/get").then((res) => 
  dispatch(menu(res.data)));
}
  