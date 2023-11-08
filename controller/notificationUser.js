// const NotificationUser = require('../model/notificationUser');

// // POST - Create a new notification
// exports.createNotificationUser = (req, res) => {
//   const { message } = req.body;

//   // Create a new notification object
//   const newNotificationUser = new NotificationUser({
//     message
//   });

//   // Save the notification to the database
//   newNotificationUser.save((err, savedNotificationUser) => {
//     if (err) {
//       res.status(500).json({ error: 'An error occurred while creating the notification.' });
//     } else {
//       res.status(201).json(savedNotificationUser);
//     }
//   });
// };

// // GET - Get all notifications
// exports.getNotificationsUser = (req, res) => {
//   NotificationUser.find({}, (err, notificationsUser) => {
//     if (err) {
//       res.status(500).json({ error: 'An error occurred while fetching notifications.' });
//     } else {
//       res.json(notificationsUser);
//     }
//   });
// };

// // GET - Get a single notification by ID
// exports.getNotificationUserById = (req, res) => {
//   const { id } = req.params;

//   NotificationUser.findById(id, (err, notificationUser) => {
//     if (err) {
//       res.status(500).json({ error: 'An error occurred while fetching the notification.' });
//     } else if (!notificationUser) {
//       res.status(404).json({ error: 'Notification not found.' });
//     } else {
//       res.json(notificationUser);
//     }
//   });
// };

// // DELETE - Delete a notification by ID
// exports.deleteNotificationUser = (req, res) => {
//   const { id } = req.params;

//   NotificationUser.findByIdAndDelete(id, (err, deletedNotificationUser) => {
//     if (err) {
//       res.status(500).json({ error: 'An error occurred while deleting the notification.' });
//     } else if (!deletedNotificationUser) {
//       res.status(404).json({ error: 'Notification not found.' });
//     } else {
//       res.json({ message: 'Notification deleted successfully.' });
//     }
//   });
// };

// // PUT - Update a notification by ID
// exports.updateNotificationUser = (req, res) => {
//   const { id } = req.params;
//   const { message } = req.body;

//   NotificationUser.findByIdAndUpdate(
//     id,
//     { message },
//     { new: true, runValidators: true },
//     (err, updatedNotificationUser) => {
//       if (err) {
//         res.status(500).json({ error: 'An error occurred while updating the notification.' });
//       } else if (!updatedNotificationUser) {
//         res.status(404).json({ error: 'Notification not found.' });
//       } else {
//         res.json(updatedNotificationUser);
//       }
//     }
//   );
// };


var NotificationUser = require("../model/notificationUser");

const cron = require("node-cron");


module.exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const notificationUser = await NotificationUser.create({

     
      // date: req.body.date,
      message: req.body.message,
    })
    

    //save notification in the database

    res.status(201).json(notificationUser)
  }
  catch (error) {
    {
      res.status(400).json(error);
    };
  }
}

exports.findByid = async (req, res) => {
  const id = req.params.id;

  NotificationUser.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found patient with id" + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Erreur retrieving patient with id " + id });
    });
};

//retrieve and return all notification/ retrieve and return a single notification
module.exports.find = async (req, res) => {
  const notificationsUser = await NotificationUser.find();
  return res.status(200).json(notificationsUser);
}




exports.delete = (req, res) => {
  const id = req.params.id;
  NotificationUser.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! " });
      } else {
        res.send({
          message: "notification was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Patient with id=" + id });
    });
};





exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data to update can not be empty" });
    return;
  }
  const id = req.params.id;




  NotificationUser.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update notification information" });
      });
};

exports.getAllNotificationsUser = async (req, res) => {
  try {
    const notificationsUser = await NotificationUser.find().populate('notificationUser');
    res.status(200).json(notificationsUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getNotificationUser = async (req, res) => {
  try {
    console.log( req.params.Status_SIM)
    const id = req.params.id;



    NotificationUser.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update notification information" });
      });

    // Send the array of newnotification in the response
    
    res.status(200).json(NotificationUser)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
