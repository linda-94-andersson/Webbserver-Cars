const express = require("express");

const carsRouter = express.Router();

const carsController = require("../controllers/cars.controller");

carsRouter.get("/cars", carsController.getCars);

carsRouter.get("/cars/:id", carsController.getCar);

carsRouter.post("/cars", carsController.addCar);

carsRouter.delete("/cars/:id", carsController.deleteCar);

module.exports = carsRouter; 