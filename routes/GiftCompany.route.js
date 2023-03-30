
const express = require("express")
const GiftCompanyRoute = express.Router()
const {GiftCompanyModel}= require("../model/GiftCards.model")


GiftCompanyRoute.post("/add",async(req,res)=>{

    try{
       const newcompany = new GiftCompanyModel(req.body)
       await newcompany.save()
       //await GiftCompanyModel.insertMany(req.body.restaurants)
       res.status(200).send({"msg":"new company added"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

GiftCompanyRoute.get("/get",async(req,res)=>{

    try{
       const allcompany = await GiftCompanyModel.find()
     
       res.status(200).send({"msg":allcompany})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

GiftCompanyRoute.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
 
  await GiftCompanyModel.findByIdAndUpdate({_id:id},req.body)
  res.status(200).send({"msg":" company id updated"})


}catch(err){
  res.status(400).send({"msg":err.message})

}
})

GiftCompanyRoute.delete("/delete/:id",async(req,res)=>{
          const {id} = req.params
    try{
       
        await GiftCompanyModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":" company id deleted"})


    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

module.exports={
    GiftCompanyRoute
}
