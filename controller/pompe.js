

  var Pompe = require("../model/pompe");

  const cron = require("node-cron");
  //const pompe = require("./path/to/pompeModel");
    
  //create and save new pompe
  
  module.exports.create = async (req, res) => {
    console.log(req.body);
    try {
      const pompe = await Pompe.create({
  
           // date_debut:req.body.date_debut,
        // date_fin:req.body.date_fin,
        // zone:req.body.zone,
        active:req.body.active,
        // zone: req.body.zone,
        agendas: req.body.agendas,
        user : req.body.user
    })


      
  
      //save pompe in the database
  
      res.status(201).json(pompe)
    }
    catch (error) {
      {
        res.status(400).json(error);
      };
    }
  }
  
  exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    Pompe.findById(id)
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
  
  //retrieve and return all pompe/ retrieve and return a single pompe
  module.exports.find = async (req, res) => {
    const pompes = await Pompe.find();
    return res.status(200).json(pompes);
  }
  
  
  
  
  exports.delete = (req, res) => {
    const id = req.params.id;
    Pompe.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! " });
        } else {
          res.send({
            message: "pompe was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };
  

  exports.update =async (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
    const id = req.params.id;
  
  
  
  
    Pompe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
          } else {
            console.log("data", data);
            console.log(req.body);
             res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({ message: "Error Update pompe information" });
        });
  };
  
  
  exports.getPompe = async (req, res) => {
    try {
      console.log( req.params.Status_SIM)
      const id = req.params.id;
  
      Pompe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({ message: "Error Update pompe information" });
        });
  
      // Send the array of newpompe in the response
      
      res.status(200).json(Pompe)
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };
  
  exports.changeStatusWithAgenda = async  (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send({ message: "Data to update can not be empty" });
        return;
      }
      const agend = req.params.id;
      console.log("agend", agend);
    Pompe.find({agendas: { $in: agend }})
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot Update patient with ${agend}. Maybe patient not found !" });
      } else {
        console.log("data", data);
        console.log(req.body);
         res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update pompe information" });
    });
    }
    catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }

  };

  exports.findPompeByUser = async  (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send({ message: "Data to update can not be empty" });
        return;
      }
      const user = req.params.id;
      console.log("user", user);
      Pompe.find({user: user })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot Update patient with ${user}. Maybe patient not found !" });
      } else {
        console.log("data", data);
        console.log(req.body);
         res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
    }
    catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }

  };