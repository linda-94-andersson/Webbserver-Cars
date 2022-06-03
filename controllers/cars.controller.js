const uuid = require('uuid');
const model = require("../models/cars.model");

function getCars(req, res) {
    res.json(model.cars);
}

function getCar(req, res) {
    const foundCar = model.cars.find((car) => car.id === req.params.id);
    res.json(foundCar);
}

function addCar(req, res) {
    if (!req.body.reg) {
        return res.status(400).json({ error: "Reg.nummer saknas" });
    }

    model.cars.push({
        id: uuid.v4(),
        reg: req.body.reg
    })

    const reg = req.body.reg;
    res.send(reg);
}

function deleteCar(req, res) {
    model.cars = model.cars.filter((car) => car.id !== req.params.id);
    res.json(model.cars);
}

module.exports = {
    getCars: getCars,
    getCar: getCar,
    addCar: addCar,
    deleteCar: deleteCar
}