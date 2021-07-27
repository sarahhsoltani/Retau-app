const express=require('express')
const app=express()
const cors = require('cors')
//connect db
const connectDB=require('./Config/db')
connectDB()
app.use(cors())
app.use(express.json());
//routers
const user=require("./Routers/userRouter")
const menu=require("./Routers/menuRouter")
const order=require("./Routers/orderRouter")
app.use('/RestoApp/user',user)
app.use('/RestoApp/menu',menu)
app.use('/RestoApp/order',order)


const PORT=process.env.PORT || '4000'


//config server
app.listen(PORT ,(err)=>{
if (err){
    console.log('server is not running ')
}
else {
    console.log(`server is running on port ${PORT}`)
}
})