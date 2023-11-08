var Zone = require("../model/zone");

//create and save new zone

 module.exports.create =  async (req, res)=>{
    console.log(req.body);
  try{
    const zone = await Zone.create({
 
      name:req.body.name,
      vanne:req.body.vanne,
      mesure:req.body.mesures
    
    })
  
    //save zone in the database
    
        res.status(201).json(zone)
    }
    catch(error){{
        res.status(400).json(error);
    };
}
 }

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    Zone.findById(id)
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

//retrieve and return all zone/ retrieve and return a single zone
module.exports.find = async (req, res)=>{
 const zones = await Zone.find();
  return res.status(200).json(zones);
}


exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
    const id = req.params.id;
    Zone.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update zone information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Zone.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "zone was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };
  exports.getZone= async (req, res) => {
    try {
      console.log( req.params.Status_SIM)
      const id = req.params.id;
  
  
  
      Zone.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({ message: "Error Update Zone information" });
        });
  
      // Send the array of Zone in the response
      
      res.status(200).json(Zone)
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };
