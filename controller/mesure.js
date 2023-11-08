var Mesure = require("../model/mesure");



module.exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const mesure = await Mesure.create({

      tem_sol: req.body.tem_sol,
      tem_externe: req.body.tem_externe,
      hum_sol: req.body.hum_sol,
      hum_externe : req.body.hum_externe,


    })
    

    //save mesure in the database

    res.status(201).json(mesure)
  }
  catch (error) {
    {
      res.status(400).json(error);
    };
  }
}

exports.findByid = async (req, res) => {
  const id = req.params.id;

  Mesure.findById(id)
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

//retrieve and return all mesure/ retrieve and return a single mesure
module.exports.find = async (req, res) => {
  const mesures = await Mesure.find();
  return res.status(200).json(mesures);
}




exports.delete = (req, res) => {
  const id = req.params.id;
  Mesure.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! " });
      } else {
        res.send({
          message: "mesure was deleted successfully!",
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




    Mesure.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update mesure information" });
      });
};


exports.getMesure = async (req, res) => {
  try {
    console.log( req.params.Status_SIM)
    const id = req.params.id;



    Mesure.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update mesure information" });
      });

    // Send the array of newMesure in the response
    
    res.status(200).json(Mesure)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
