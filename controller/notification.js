var Notification = require("../model/notification");




module.exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const notification = await Notification.create({

      agriculteur: req.body.agriculteur,
      // date: req.body.date,
      action: req.body.action,
    })
    

    //save notification in the database

    res.status(201).json(notification)
  }
  catch (error) {
    {
      res.status(400).json(error);
    };
  }
}

exports.findByid = async (req, res) => {
  const id = req.params.id;

  Notification.findById(id)
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
  const notifications = await Notification.find();
  return res.status(200).json(notifications);
}




exports.delete = (req, res) => {
  const id = req.params.id;
  Notification.findByIdAndDelete(id)
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




  Notification.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().populate('notification');
    res.status(200).json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getNotification = async (req, res) => {
  try {
    console.log( req.params.Status_SIM)
    const id = req.params.id;



    Notification.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
    
    res.status(200).json(Notification)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
