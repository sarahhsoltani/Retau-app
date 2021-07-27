const User=require ('../Models/userModel')

module.exports={
    postUsers:async (req,res)=>{
        //const users=await User.find('userr')
        res.send('post users')
    },
    getUsers:async (req,res)=>{
        //const users=await User.find('userr')
        res.send('users')
    },
    getUsersById:async (req,res)=>{
     
        res.send(' users by id')
    },
    deleteUsers:async (req,res)=>{
      
        res.send('delete users')
    },
    updateUsers:async (req,res)=>{
    
        res.send('update users')
    }
}