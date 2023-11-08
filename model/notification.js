const mongoose = require("mongoose");



var notification_schema = new mongoose.Schema({
    agriculteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agriculteur',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      },

    action: {
        type:String,
        required: true
    },

})

const Notification = mongoose.model("Notification",notification_schema);

module.exports = Notification;