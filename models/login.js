const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "name":String,
    "phnno":String,
    "gender":String,
    "email":String,
    "password":String
})
let loginmodel = mongoose.model("users",schema)
module.exports={loginmodel}
