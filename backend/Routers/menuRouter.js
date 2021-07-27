const express=require("express")
const router=express.Router()
const Menu=require('../Controllers/menuController')


router.post("/post",Menu.postMenu)
router.get("/get",Menu.getMenu)
router.get("/byId",Menu.getMenusById)
router.delete("/:id",Menu.deleteMenu)
router.put("/:id",Menu.updateMenu)

module.exports=router