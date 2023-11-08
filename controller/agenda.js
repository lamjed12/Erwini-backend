
var Agenda = require("../model/agenda");


//create and save new Agenda


exports.create =  (req, res)=>{
    console.log(req.body);
    //validate request
   

    //new Agenda
    const agenda = new Agenda({
      date_debut:req.body.date_debut,
      date_fin:req.body.date_fin,
      puit:req.body.puit,
      pompe: req.body.pompe,
      type: req.body.type,
       

    })

    //save Agenda in the database
    
    try{
        res.status(201).json(agenda.save())
    }
    catch{
        res.status(400).json({ message: error.message || "Some error" });
    };
}

exports.findByid = async (req, res) => {
    const id = req.params.id;
  
    Agenda.findById(id)
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

//retrieve and return all Agendas/ retrive and return a single Agenda
exports.find = (req, res)=>{

    if(req.query.id) {
        const id = req.query.id;

        Agenda.findById(id)
        .then(data =>{
            if(!data){
            res.status(404).send({message : "not found Agenda with id"+id})

            }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({message: "erro retrieving Agenda with id"+id})
    })

    }else{
    Agenda.find()
    .then(agenda=>{
        res.send(agenda)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error occurred while retriving Agenda information"})
    })
}
}

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Data to update can not be empty" });
      return;
    }
  
    const id = req.params.id;
    Agenda.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Update patient with ${id}. Maybe patient not found !" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error Update Agenda information" });
      });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Agenda.findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Cannot Delete patient with ${id}. Maybe patient not found ! "});
        } else {
          res.send({
            message: "Agenda was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Could not delete Patient with id=" + id });
      });
  };


  //retrieve and return all Agendas/ retrive and return a single Agenda
exports.findByType = (req, res)=>{
console.log(req.params.type)
  Agenda.find({type: req.params.type})
  .sort('date_debut')
  .then(results => {
    if (!results) {
      res.status(404).send({ message: "Cannot Delete patient with ${type}. Maybe patient not found ! "});
    } else {
      res.send(results);
    }
  })
  .catch(err => res.status(500).send({ message: "Error Update Agenda information" }))
}