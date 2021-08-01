import {getOrders,postOrders} from "../../services/api"
import { GET_ORDER ,POST_ORDER} from "./types";
import axios from "axios"
// Get order
export const getOrderAPI=()=>async (dispatch)=> {
    try{
    const res=await getOrders ();
    dispatch({
        type:GET_ORDER,
        payload:res.data
    })
    console.log("orders")
    }
    catch (error) {
                  console.log(error);
                 }
    }
    // Post order
    export const addOrderApi=(nom, address, number, quantity,validation )=> async (dispatch) =>{
        try{
            const res=await axios.post("http://localhost:4000/RestoApp/order/order/post",({nom, address, number, quantity,validation}));
            dispatch ({
                type:POST_ORDER,
                payload:res.data
            })
            console.log("add order")
        }
        catch (error) {
                  console.log("err",error);
                 }
    }