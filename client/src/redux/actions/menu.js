import {ADD_MENU ,GET_MENU} from "./types"
 import axios from 'axios'
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


// import {fetchMenu} from '../../component/request'
// import {addMenu}from "../../component/request"
// import { ADD_MENU_API } from '../../component/shered/apiUrls';
import {addNewMenu,getAllMenus}   from "../../services/api"

// export function allMenu() {


//     return dispatch => {
//         fetchMenu()
//         .then (menu =>dispatch (
//             {type: "GET_FABRIQUE_SUCCEDED",payload: menu})
//         )

//         .catch(err=>dispatch( {
//             type: "GET_FABRIQUE_FAILED",
//             payload: err
//           }))
//     }

// }
// export const addFood = (payload) => ({
//     type: ADD_MENU_API,
//     payload,
//   });
// export function addMenuApi(food) {
//     return (dispatch) => {
//         axios.post("http://localhost:4000/RestoApp/menu/post",{food})
        
//         .then((res)=>{console.log(res.data)})
//         window.location.reload()
//         .catch(err=>{console.log(err)})
    //  .then((res) => {
    //      console.log("food",food)
    //      console.log("res.data",res.data)
    //     dispatch(addFood(food));
    //   });
    
//     };
//   }


//   export const addMenuApi = (titre, image, price,description) => async dispatch => {
//     try {
//       const res = await axios.post('http://localhost:4000/RestoApp/menu/post',
//        { titre, image, price,description });
//       dispatch({
//         type: ADD_MENU,
//         payload: res.data
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const addMenuApi=(title, price,image,description )=> async (dispatch) =>{
    try{
        const res=await addNewMenu (title, price,image,description);
        dispatch ({
            type:ADD_MENU,
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
//getALL
export const getMenuAPI=()=>async (dispatch)=> {
try{
const res=await getAllMenus ();
dispatch({
    type:GET_MENU,
    payload:res.data
})
}
catch (error) {
              console.log(error);
             }
}