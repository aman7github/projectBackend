
const express = require("express")
const HealthCompanyRoute = express.Router()
const {HealthCompanyModel}= require("../model/HealthCompany.model")


HealthCompanyRoute.post("/add",async(req,res)=>{

    try{
       const newcompany = new HealthCompanyModel(req.body)
       await newcompany.save()
       //await HealthCompanyModel.insertMany(req.body.health)
       res.status(200).send({"msg":"new company added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

HealthCompanyRoute.get("/get",async(req,res)=>{

    try{
       const allcompany = await HealthCompanyModel.find()
     
       res.status(200).send({"msg":allcompany})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

HealthCompanyRoute.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
 
  await HealthCompanyModel.findByIdAndUpdate({_id:id},req.body)
  res.status(200).send({"msg":" company id updated"})


}catch(err){
  res.status(400).send({"msg":err.message})

}
})

HealthCompanyRoute.delete("/delete/:id",async(req,res)=>{
          const {id} = req.params
    try{
       
        await HealthCompanyModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":" company id deleted"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

module.exports={
    HealthCompanyRoute
}
