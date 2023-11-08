const mongoose = require('mongoose');

const VanneSchema = new mongoose.Schema({
  NbVanne: {
    type: String
    // required: true
  },
  status: {
    type: String,
    required: true,
    default: 'closed',
  },
  Batterie: {
    type: String,
  },
  Zone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Zone',
  },
  mesures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mesure'
}]

});

module.exports = mongoose.model('Vanne', VanneSchema);




