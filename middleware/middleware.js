
const express = require("express")
const jwt = require("jsonwebtoken")


const middleware = (req,res,next)=>{

const token = req.headers.authorization

if(token){
   const decoded = jwt.verify(token, "batman")
   console.log(token)
if(decoded){
    console.log(decoded)
    req.body.userID = decoded.userID
    next()

}else{
    res.status(400).send({"msg":"userID is not found"})
}

}else{
    res.status(400).send({"msg":"please login first"})
}

}

module.exports={
    middleware
}