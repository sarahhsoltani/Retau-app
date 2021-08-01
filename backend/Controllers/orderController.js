const Order=require ('../Models/orderModel')

module.exports={
    addOrder: async (req, res) => {
        const {nom, address, number, quantity,validation } = req.body;
    
        try {
          orders = new order({
            nom, 
            address ,
            number,
            quantity,
            validation
           
          });
          await orders.save();
          res.json(orders);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("not posted yet");
        }
      },
    getOrder:async (req,res)=>{
       try{
       const orders=  await Order.find()
        res.json(orders)
       }
       catch(error){
        console.error(error.message)
        res.status(500).send('server error order not found')
    }
    },
   //Delete Order
   deleteOrder:async (req,res)=>{
    try{
        menu=await Order.findByIdAndDelete(req.params.id)
        res.json(' Order deleted')
    }
    catch(error){
        console.error(error.message)
        res.status(500).send('not deleted yet')
    }
  }

  
}

