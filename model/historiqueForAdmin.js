const mongoose = require("mongoose");



var historiqueForAdmin_schema = new mongoose.Schema({
    phoneAgrecuteur : {
        type : String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    typeAction: {
        type : String,
    }
    
})


const HistoriqueForAdmin = mongoose.model("HistoriqueForAdmin", historiqueForAdmin_schema);

module.exports = HistoriqueForAdmin;