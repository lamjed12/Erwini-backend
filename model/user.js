const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    name :  String,
    email: String,
    role:String,
    password:String,
    status:String
})




const Userdb = mongoose.model("userdb",schema);

module.exports = Userdb;