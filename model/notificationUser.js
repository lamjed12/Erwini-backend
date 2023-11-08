const mongoose = require('mongoose');

var notificationUser_schema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  }
});

const NotificationUser = mongoose.model('NotificationUser', notificationUser_schema);

module.exports = NotificationUser;


