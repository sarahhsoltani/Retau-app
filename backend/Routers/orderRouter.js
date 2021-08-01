const express=require("express")
const router=express.Router()
const Order=require('../Controllers/orderController')

router.get("/allorder/get",Order.getOrder)
router.post("/order/post",Order.addOrder)
router.delete("/delete/:id",Order.deleteOrder)


module.exports=router