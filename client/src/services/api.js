import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000/RestoApp" });

//addMenu
function addNewMenu(title, price,image,description ) {
    return Api.post("/menu/post", { title, price,image,description});
  }

  //getMenu
  function getAllMenus() {
    return Api.get("/menu/get");
  }

//deleteMenu
function deleteMenus(id) {
    return Api.delete(`/menu/delete/${id}`);
  }

  //update Menu 

  function updateMenus(id) {
    return Api.put(`/menu/update/${id}`);
  }

   //getOneMenu
   function getMenu(id) {
    return Api.get(`/getOne/${id}`);
  }

   // get Order 

   function getOrders() {
     return Api.get("/order/allorder/get")
 
  }

   // post Order 

   function postOrders() {
    return Api.post("/order/order/post")

 }


  export {addNewMenu,getAllMenus,deleteMenus,updateMenus,getOrders,postOrders,getMenu} 
  export default {addNewMenu,getAllMenus,deleteMenus,updateMenus,getOrders,postOrders,getMenu}