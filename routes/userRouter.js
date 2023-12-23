const express = require('express');
const user_route = express.Router();

// const services = require("../services/render");
const user = require("../controller/user");
const Agenda = require("../controller/agenda");
const puit =  require("../controller/puit");
const pompe =  require("../controller/pompe");
const historique =  require("../controller/historique");
const vanne =  require("../controller/vanne");
const zone =  require("../controller/zone");
const mesure =  require("../controller/mesure");
const notificationUser = require('../controller/notificationUser');
const map = require('../controller/map');
const agriculteur =  require('../controller/agriculteur');


  //API user 
  user_route.post(' create/user', user.create);
  user_route.get(" users",user.find);
  user_route.get(" user/:id",user.findByid);
  user_route.put(" user/:id",user.update);
  user_route.delete(" user/:id",user.delete);

  //API Agenda 
  user_route.post('/api/create/Agenda', Agenda.create);
  user_route.get("/api/Agendas",Agenda.find);
  user_route.get("/api/Agenda/:id",Agenda.findByid);
  user_route.put("/api/Agenda/:id",Agenda.update);
  user_route.delete("/api/Agenda/:id",Agenda.delete);
  user_route.get("/api/Agenda/find/:type",Agenda.findByType);

 //API puit 
 user_route.post('/api/create/puit',puit.create);
 user_route.get("/api/puits",puit.find);
 user_route.get("/api/puit/:id",puit.findByid);
 user_route.get("/api/puit/ByUser/:id",puit.findPuitByUser);
 user_route.put("/api/puit/:id",puit.update);
 user_route.get("/api/puit/byAgenda/:id",puit.changeStatusWithAgenda);
 user_route.delete("/api/puit/:id",puit.delete);

  //API vanne 
  user_route.post('/api/create/vanne',vanne.create);
  user_route.get("/api/vannes",vanne.find);
  user_route.get("/api/vanne/ByUser/:id",vanne.findVanneByUser);
  user_route.get("/api/vanne/:id",vanne.findByid);
  user_route.put("/api/vanne/:id",vanne.update);
  user_route.delete("/api/vanne/:id",vanne.delete);

    //API zone 
    user_route.post('/api/create/zone',zone.create);
    user_route.get("/api/zones",zone.find);
    user_route.get("/api/zone/:id",zone.findByid);
    user_route.put("/api/zone/:id",zone.update);
    user_route.delete("/api/zone/:id",zone.delete);


    //Authetification
 user_route.post('/authentifierAgriculteur',agriculteur.authentifierAgriculteur);
  
 //API pompe 
 user_route.post('/api/create/pompe', pompe.create);
 user_route.get("/api/pompes",pompe.find);
 user_route.get("/api/pompe/:id",pompe.findByid);
 user_route.get("/api/pompe/byUser/:id",pompe.findPompeByUser);
 user_route.put("/api/pompe/:id",pompe.update);
 user_route.get("/api/pompe/byAgenda/:id",pompe.changeStatusWithAgenda);
 user_route.delete("/api/pompe/:id",pompe.delete);

  //API mesure 
  user_route.post('/api/create/mesure', mesure.create);
  user_route.get("/api/mesures",mesure.find);
  user_route.get("/api/mesure/:id",mesure.findByid);
  user_route.put("/api/mesure/:id",mesure.update);
  user_route.delete("/api/mesure/:id",mesure.delete);
 

  //API historique 
  user_route.post('/api/create/historique', historique.create);
  user_route.get("/api/historiques",historique.find);
  user_route.get("/api/historique/:id",historique.findByid);
  user_route.put("/api/historique/:id",historique.update);
  user_route.delete("/api/historique/:id",historique.delete);
 
  //API notification 
  user_route.post('/api/create/notificationUser' ,notificationUser.create);
  user_route.get("/api/notificationsUser",notificationUser.find);
  user_route.get("/api/notificationUser/:id",notificationUser.findByid);
  user_route.put("/api/notificationUser/:id",notificationUser.update);
  user_route.delete("/api/notificationUser/:id",notificationUser.delete);

   
  //API map 
  user_route.post('/api/create/map' ,map.create);
  user_route.get('/api/maps',map.getMaps);
  user_route.delete('/api/maps/:id',map.delete);




  module.exports = user_route ;