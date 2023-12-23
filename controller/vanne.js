var Vanne = require("../model/vanne");

//create and save new vanne

 module.exports.create =  async (req, res)=>{
  try{
    const vanne = await Vanne.create({
 
      NbVanne:req.body.NbVanne,
      status:req.body.status,
      Batterie:req.body.Batterie,
      zone :req.body.Zone,
      mesure : req.body.mesure,
      user : req.body.user
    })
  
    //save vanne in the database
    
        res.status(201).json(vanne)
    }
    catch(error){{
        res.status(400).json(error);
    };
}
 }

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    Vanne.findById(id)
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

//retrieve and return all vanne/ retrieve and return a single vanne
module.exports.find = async (req, res)=>{
 const vannes = await Vanne.find();
  return res.status(200).json(vannes);
}


exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
    const id = req.params.id;
    Vanne.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update vanne information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Vanne.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "vanne was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };

exports.findVanneByUser = async  (req, res) => {
    try {
      if (!req.body) {
        res.status(400).send({ message: "Data to update can not be empty" });
        return;
      }
      const user = req.params.id;
      console.log("user", user);
      Vanne.find({user: user })
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