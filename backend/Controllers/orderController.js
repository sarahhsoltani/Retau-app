const Order=require ('../Models/orderModel')

module.exports={
    addOrder: async (req, res) => {
        const { name, image, price,quantity } = req.body;
    
        try {
          orders = new order({
            quantity,
            
            name,
            price,
            image
           
          });
          await orders.save();
          res.json(orders);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
      },
    getOrder:async (req,res)=>{
        //const order=await User.find('userr')
        res.send('order')
    },
    getOrderById:async (req,res)=>{
     
        res.send(' order by id')
    },
    deleteOrder:async (req,res)=>{
      
        res.send('delete order')
    },
    updateOrder:async (req,res)=>{
    
        res.send('update order')
    }
}