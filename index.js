const express  = requier("express");
const app = express();
const Router = express.Router()

Router.get("/" , (req , res)=>{
    res.status(200).json({msg : "this is setting"})
})


app.listen(3000, ()=>{
    console.log("stareted");
})