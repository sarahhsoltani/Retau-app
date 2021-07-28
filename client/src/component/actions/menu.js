
// import axios from 'axios'
// import { GET_MENU } from "../actions/types";
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


// export  function allMenu() {
//   return (dispatch) => axios.get("http://localhost:4000/RestoApp/menu/get",
//   {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
//   ).then((res) => 
//   res.data).then(menu=>dispatch({type:GET_MENU,
//   menu
//   }));
// }


import {fetchMenu} from '../request'


export function allMenu() {
    return dispatch => {
        fetchMenu()
        .then (menu =>dispatch (
            {type: "GET_FABRIQUE_SUCCEDED",payload: menu})
        )

        .catch(err=>dispatch( {
            type: "GET_FABRIQUE_FAILED",
            payload: err
          }))
    }

}

  