
var HistoriqueForAdmin = require("../model/historiqueForAdmin");

const cron = require("node-cron");


module.exports.create = async (req, res) => {
    console.log("historique of admin");
    console.log(req.body);
    try {
      const historiqueForAdmin = await HistoriqueForAdmin.create({
        phoneAgrecuteur: req.body.phoneAgrecuteur,
        date: req.body.date,
        nameAgrecuteur: req.body.nameAgrecuteur,
        typeAction: req.body.typeAction
      })
      
      res.status(201).json(historiqueForAdmin)
    }
    catch (error) {
      {
        res.status(400).json(error);
      };
    }
  }

    //retrieve and return all historique/ retrieve and return a single historique
    module.exports.find = async (req, res) => {
        const historiqueForAdmin = await HistoriqueForAdmin.find();
        return res.status(200).json(historiqueForAdmin);
      }
      