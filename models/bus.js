const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "bname":String,
    "route":String,
    "bno":String,
    "dname":String,
})
let busmodel = mongoose.model("buses",schema)
module.exports={busmodel}
