

    var Historique = require("../model/historique");

    const cron = require("node-cron");
    //const historique = require("./path/to/historiqueModel");
    
    //create and save new historique
    
    module.exports.create = async (req, res) => {
      console.log(req.body);
      try {
        const historique = await Historique.create({
    
          num_zone: req.body.num_zone,
          // date: req.body.date,
          mesures: req.body.mesures
    
    
        })
        
    
        //save historique in the database
    
        res.status(201).json(historique)
      }
      catch (error) {
        {
          res.status(400).json(error);
        };
      }
    }
    
    exports.findByid = async (req, res) => {
      const id = req.params.id;
    
      Historique.findById(id)
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
    
    //retrieve and return all historique/ retrieve and return a single historique
    module.exports.find = async (req, res) => {
      const historiques = await Historique.find();
      return res.status(200).json(historiques);
    }
    
    
    
    
    exports.delete = (req, res) => {
      const id = req.params.id;
      Historique.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! " });
          } else {
            res.send({
              message: "historique was deleted successfully!",
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
    
    
    
    
      Historique.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then((data) => {
            if (!data) {
              res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
            } else {
              res.send(data);
            }
          })
          .catch((err) => {
            res.status(500).send({ message: "Error Update historique information" });
          });
    };
    
    
    exports.getHistorique = async (req, res) => {
      try {
        console.log( req.params.Status_SIM)
        const id = req.params.id;
    
    
    
        Historique.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then((data) => {
            if (!data) {
              res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
            } else {
              res.send(data);
            }
          })
          .catch((err) => {
            res.status(500).send({ message: "Error Update historique information" });
          });
    
        // Send the array of newhistorique in the response
        
        res.status(200).json(Historique)
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
    };
    