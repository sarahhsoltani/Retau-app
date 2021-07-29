import Axios from "axios"

import {
    GET_MENU_API,
   ADD_MENU_API
} from "./shered/apiUrls"

export const fetchMenu=()=>
Axios.get(GET_MENU_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)

  export const addMenu=()=>
  Axios.post(ADD_MENU_API,{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then(res=>res.data)