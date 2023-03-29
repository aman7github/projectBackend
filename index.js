const express = require("express") 
const {connection}=require("./db/db")
const {approute} = require("./routes/user.route")
const app = express()
app.use(express.json())

app.use("/user", approute)






app.listen(process.env.port,async()=>{

try{
   await connection
   console.log({"msg":"connected"})
}
catch(err){
    console.log({"msg":"not connected"})
}

})






