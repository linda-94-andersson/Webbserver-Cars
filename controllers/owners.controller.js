const uuid = require('uuid');
const model = require("../models/owners.model");

function getOwners(req, res) {
    res.json(model.owners);
}

function getOwner(req, res) {
    const foundOwner = model.owners.find((owner) => owner.id === req.params.id);
    
    // const foundRelations = relations.filter((rel) => rel.ownerId === req.params.id);
    // const foundCars = foundRelations.map(((rel) => {
    //     const foundCar = cars.find((car) => car.id === rel.carId)
    //     return foundCar;
    // }))

    res.json({
        owner: foundOwner,
        // cars: foundCars
    });
}

function addOwner(req, res) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Namn saknas" });
    }

    model.owners.push({
        id: uuid.v4(),
        name: req.body.name
    })

    const name = req.body.name;
    res.send(name);
}

function deleteOwner(req, res) {
    model.owners = model.owners.filter((owner) => owner.id !== req.params.id);
    res.json(model.owners);;
}

module.exports = {
    getOwners: getOwners,
    getOwner: getOwner,
    addOwner: addOwner,
    deleteOwner: deleteOwner
}