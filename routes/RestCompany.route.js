


const express = require("express")
const RestCompanyRoute = express.Router()
const {RestCompanyModel}= require("../model/RestCompany.model")


RestCompanyRoute.post("/add",async(req,res)=>{

    try{
       const newcompany = new RestCompanyModel(req.body)
       await newcompany.save()
       //await RestCompanyModel.insertMany(req.body.restaurants)
       res.status(200).send({"msg":"new company added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

RestCompanyRoute.get("/get",async(req,res)=>{

    try{
       const allcompany = await RestCompanyModel.find()
     
       res.status(200).send({"msg":allcompany})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

RestCompanyRoute.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
 
  await RestCompanyModel.findByIdAndUpdate({_id:id},req.body)
  res.status(200).send({"msg":" company id updated"})


}catch(err){
  res.status(400).send({"msg":err.message})

}
})

RestCompanyRoute.delete("/delete/:id",async(req,res)=>{
          const {id} = req.params
    try{
       
        await RestCompanyModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":" company id deleted"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

module.exports={
    RestCompanyRoute
}
