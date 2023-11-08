const express = require('express');
const admin_route = express.Router();

// const services = require("../services/render");
const user = require("../controller/user");
const whiteTest = require("../controller/agenda");
const agriculteur =  require("../controller/agriculteur");
const historique =  require("../controller/historique");
const notification =  require("../controller/notification");

const auth =  require("../controller/authentifcation");


  //API user 
  admin_route.post(' create', user.create);
  admin_route.get(" users",user.find);
  admin_route.get(" user/:id",user.findByid);
  admin_route.put(" user/:id",user.update);
  admin_route.delete(" user/:id",user.delete);


 //API agriculteur 
 admin_route.post('/api/create/agriculteur',agriculteur.create);
 admin_route.get("/api/agriculteurs",agriculteur.find);
 admin_route.get("/api/agriculteur/:id",agriculteur.findByid);
 admin_route.put("/api/agriculteur/:id",agriculteur.update);
 admin_route.get("/api/agriculteur/point/:id",agriculteur.updatePoints);
 admin_route.get("/api/statusSim",agriculteur.getStatusSIM);

 admin_route.delete("/api/agriculteur/:id",agriculteur.delete);


 //API historique 
 admin_route.post('create/historique', historique.create);
 admin_route.get("/historique",historique.find);
 admin_route.get("/historique/:id",historique.findByid);
 admin_route.put("/historique/:id",historique.update);
 admin_route.delete("/historique/:id",historique.delete);


  //API notification 
  admin_route.post("/api/create/notification", notification.create);
  admin_route.get("/api/notifications",notification.find);
  admin_route.get("/notification/:id",notification.findByid);
  admin_route.put("/notification/:id",notification.update);
  admin_route.delete("/notification/:id",notification.delete);

 //API auth 
 admin_route.post("/api/xauth/registration", auth.registration);
 admin_route.post("/api/xauth/signin", auth.signin);
  module.exports = admin_route ;