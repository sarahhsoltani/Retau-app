const mongoose=require('mongoose')
const schema=mongoose.Schema
const orderSchema=new schema({
    nom:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    quantity:{ type: Number
},

    validation:
    { type: String }

   
})
module.exports=order=mongoose.model('order',orderSchema)