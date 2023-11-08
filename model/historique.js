const mongoose = require("mongoose");



var historique_schema = new mongoose.Schema({
    num_zone : {
        type : Number,
        // required: true
    },
    
    date: {
        type: Date,
        default: Date.now
      },
    mesures: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesure'
    }]
    
})


const Historique = mongoose.model("Historique", historique_schema);

module.exports = Historique;