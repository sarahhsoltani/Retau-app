const mongoose=require("mongoose")
const schema=mongoose.Schema
const menuSchema=new schema({
    title:{
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
    },
    description:{
       type:String,
       require:true
   }
})
module.exports=menu=mongoose.model('menu',menuSchema)