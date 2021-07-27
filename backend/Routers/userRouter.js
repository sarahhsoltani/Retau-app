const express=require("express")
const router=express.Router()
const User=require('../Controllers/userController')


router.post("/post",User.postUsers)
router.get("/get",User.getUsers)
router.get("/byId",User.getUsersById)
router.delete("/delete",User.deleteUsers)
router.put("/update",User.updateUsers)

module.exports=router