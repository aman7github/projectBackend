const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "name":String,
    "email":String,
    "password":String,
    "age":Number,
    "city":String
},{
    versionKey:false
})

const UserModel= mongoose.model("user",schema)

module.exports={
    UserModel
}