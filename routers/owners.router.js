const express = require("express");

const ownersRouter = express.Router();

const ownersController = require("../controllers/owners.controller");

ownersRouter.get("/owners", ownersController.getOwners);

ownersRouter.get("/owners/:id", ownersController.getOwner);

ownersRouter.post("/owners", ownersController.addOwner);

ownersRouter.delete("/owners/:id", ownersController.deleteOwner);

module.exports = ownersRouter; 