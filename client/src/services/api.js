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


  export {addNewMenu,getAllMenus} 
  export default {addNewMenu,getAllMenus}