const express = require("express");
const logger = require("morgan");

const carsRouter = express.Router();

const carsController = require("../controllers/cars.controller");

carsRouter.use(logger("dev"));

carsRouter.get("/cars", carsController.getCars);

carsRouter.get("/cars/:id", carsController.getCar);

carsRouter.post("/cars", carsController.addCar);

carsRouter.delete("/cars/:id", carsController.deleteCar);

module.exports = carsRouter; 