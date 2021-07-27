const mongoose=require('mongoose')
const schema=mongoose.Schema
const orderSchema=new schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
     image:{
        type:String,
        require:true
    },quantity:{ type: Number, default: 0 }
   
})
module.exports=order=mongoose.model('order',orderSchema)