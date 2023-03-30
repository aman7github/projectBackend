const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "Title":String,
    "valid on":String,
    "valid for":String,
    "timings":String,
    "bought":String,
    "userID":String
},{
    versionKey:false
})

const RestDealModel= mongoose.model("restDeals",schema)

const HealthDealModel= mongoose.model("healthDeals",schema)

const SalonDealModel= mongoose.model("salonDeals",schema)

const GiftDealModel= mongoose.model("giftDeals",schema)

const OrderModel= mongoose.model("order",schema)

module.exports={
    RestDealModel, HealthDealModel, SalonDealModel, GiftDealModel, OrderModel
}