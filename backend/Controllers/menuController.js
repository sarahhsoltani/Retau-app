const Menu=require ('../Models/menuModel')

module.exports={

//Post Menu
    postMenu: async(req,res)=>{
        const name=req.body.name,
         price =req.body.price,
         image =req.body.image,
         description=req.body.description
       try{
           menu=new Menu({
               name,
               price,
               image,
               description
           })
           await menu.save()
           res.json(menu)
       }
       catch(error){console.error(error.message)
        res.status(500).send("server error");
    }
    },
    //Get Menu
    getMenu:async (req,res)=>{
        try{
            const menu=await Menu.find()
          
            res.json(menu)
        }
        catch(error){
            console.error(error.message)
            res.status(500).send('server error')
        }
    },
    //GetById Menu
    getMenusById:async (req,res)=>{
     
        res.send(' menu by id')
    },
    //Delete Menu
    deleteMenu:async (req,res)=>{
      try{
          menu=await Menu.findByIdAndDelete(req.params.id)
          res.json(' menu deleted')
      }
      catch(error){
          console.error(error.message)
          res.status(500).send('not deleted yet')
      }
    },
    //update Menu
    updateMenu:async (req,res)=>{
    try {
        const menu=await Menu.findByIdAndUpdate(req.params.id,req.body,
            {new:true})
          
            res.json(menu) 
    }
    catch(error){
        console.error(error.message)
        res.status(500).send('menu is not updated')
    }
    }
    
}