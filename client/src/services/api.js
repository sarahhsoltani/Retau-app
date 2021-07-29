import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000/RestoApp/menu" });

//addMenu
function addNewMenu(title, price,image,description ) {
    return Api.post("/post", { title, price,image,description});
  }

  //getMenu
  function getAllMenus() {
    return Api.get("/get");
  }

//deleteMenu
function deleteMenus(id) {
    return Api.delete(`/delete/${id}`);
  }

  //update Menu 

  function updateMenus(id) {
    return Api.put(`/update/${id}`);
  }


  export {addNewMenu,getAllMenus,deleteMenus,updateMenus} 
  export default {addNewMenu,getAllMenus,deleteMenus,updateMenus}