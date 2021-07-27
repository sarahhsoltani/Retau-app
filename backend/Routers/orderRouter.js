const express=require("express")
const router=express.Router()
const Order=require('../Controllers/orderController')

router.get("/get",Order.getOrder)
router.post("/post",Order.addOrder)
router.get("/byId",Order.getOrderById)
router.delete("/delete",Order.deleteOrder)
router.put("/update",Order.updateOrder)

module.exports=router