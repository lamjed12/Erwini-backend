var Agriculteur = require("../model/agriculteur");

const cron = require("node-cron");
//const Agriculteur = require("./path/to/AgriculteurModel");

//create and save new agriculteur

module.exports.create = async (req, res) => {
  try {
    const agriculteur = await Agriculteur.create({

      Name: req.body.Name,
      Phone: req.body.Phone,
      Pus: req.body.Pus,
      CodePuk: req.body.CodePuk,
      City: req.body.City,
      Region: req.body.Region,
      NbPompe: req.body.NbPompe,
      NbPuit: req.body.NbPuit,
      NbVanne: req.body.NbVanne,
      Password: req.body.Password,
      Points: req.body.Points,
      Status_SIM: req.body.Status_SIM

    })

    //save agriculteur in the database

    res.status(201).json(agriculteur)
  }
  catch (error) {
    {
      res.status(400).json(error);
    };
  }
}

exports.findByid = async (req, res) => {
  const id = req.params.id;

  Agriculteur.findById(id)
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
module.exports.find = async (req, res) => {
  const agriculteurs = await Agriculteur.find();
  return res.status(200).json(agriculteurs);
}




exports.delete = (req, res) => {
  const id = req.params.id;
  Agriculteur.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! " });
      } else {
        res.send({
          message: "agriculteur was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Patient with id=" + id });
    });
};


exports.updatePoints = (req, res) => {
// Schedule the task to run every day at 00:00
const id = req.params.id;
cron.schedule('*/10 * * * * *', async () => {
  try {
    // Your code to decrement the agriculteur data here
    const agriculteur = await Agriculteur.findById(id);
    console.log(`Decremented agriculteur ${agriculteur}`);
    console.log(`Decremented agriculteur ${agriculteur.Points}`);
    agriculteur.Points -= 1;
    if(agriculteur.Points == 0){
      agriculteur.Status_SIM = "inactive"; 
    }
    await agriculteur.save() 
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
      } else {

       
        res.send(data);
      }
    });
    
  } catch (error) {
    console.error(error);
    throw new Error('Failed to decrement Agriculteur by id');
  }
});

}


exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data to update can not be empty" });
    return;
  }
  const id = req.params.id;




    Agriculteur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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


exports.getStatusSIM = async (req, res) => {
  try {
    console.log( req.params.Status_SIM)
    const id = req.params.id;



    Agriculteur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    // Send the array of statusSIMs in the response
    
    res.status(200).json(statusSIMs)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
