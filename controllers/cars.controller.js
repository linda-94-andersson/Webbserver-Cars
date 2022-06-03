const uuid = require('uuid');
const model = require("../models/cars.model");

let { cars } = model;

function getCars(req, res) {
    const result = model.getAll();
    res.json(result);
}

function getCar(req, res) {
    const foundCar = cars.find((car) => car.id === req.params.id);
    res.json(foundCar);
}

function addCar(req, res) {
    if (!req.body.reg) {
        return res.status(400).json({ error: "Reg.nummer saknas" });
    }

    cars.push({
        id: uuid.v4(),
        reg: req.body.reg
    })

    const reg = req.body.reg;
    res.send(reg);
}

function deleteCar(req, res) {
    cars = cars.filter((car) => car.id !== req.params.id);
    res.json(cars);
}

module.exports = {
    getCars: getCars,
    getCar: getCar,
    addCar: addCar,
    deleteCar: deleteCar
}