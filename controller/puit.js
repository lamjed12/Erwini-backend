var Puit = require("../model/puit");

//create and save new agriculteur

 module.exports.create =  async (req, res)=>{
  try{
    const puit = await Puit.create({
 
      Pus: req.body.Pus,
      Active: req.body.Active,
      Connection: req.body.Connection,
      Agenda: req.body.Agenda,
      Security: req.body.Security,
      Alert: req.body.Alert
    
    })
  
    //save agriculteur in the database
    
        res.status(201).json(puit)
    }
    catch(error){{
        res.status(400).json(error);
    };
}
 }

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    Puit.findById(id)
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

//retrieve and return all agriculteurs/ retrieve and return a single agriculteur
module.exports.find = async (req, res)=>{
 const puits = await Puit.find();
  return res.status(200).json(puits);
}


exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
    const id = req.params.id;
    Puit.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update agriculteur information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Puit.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "puit was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };

 