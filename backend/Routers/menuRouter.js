const express=require("express")
const router=express.Router()
const Menu=require('../Controllers/menuController')


router.post("/post",Menu.postMenu)
router.get("/get",Menu.getMenu)
router.get("/getOne/:id",Menu.getOneMenu)
router.delete("/delete/:id",Menu.deleteMenu)
router.put("/update/:id",Menu.updateMenu)

module.exports=router