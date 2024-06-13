const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "name":String,
    "phnno":String,
    "gender":String,
    "email":String,
    "password":String
})
let busmodel = mongoose.model("users",schema)
module.exports={busmodel}
