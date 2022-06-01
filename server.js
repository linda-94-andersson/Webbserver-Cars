const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const uuid = require('uuid');

const PORT = process.env.PORT || 4000

const app = express();

let owners = [];
let cars = [];

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

const ownersRouter = express.Router();
const carsRouter = express.Router();

// owner 
ownersRouter.get("/owners", (req, res) => {
    res.json(owners);
})

ownersRouter.get("/owners/:id", (req, res) => {
    const foundOwner = owners.find((owner) => owner.id === req.params.id);
    res.json(foundOwner);
})

ownersRouter.post("/owners", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ error: "Namn saknas" });
    }

    owners.push({
        id: uuid.v4(),
        name: req.body.name
    })

    const name = req.body.name;
    res.send(name);
})

ownersRouter.delete("/owners/:id", (req, res) => {
    owners = owners.filter((owner) => owner.id !== req.params.id);
    res.json(owners);
})

//cars
carsRouter.get("/cars", (req, res) => {
    res.json(cars);
})

carsRouter.get("/cars/:id", (req, res) => {
    const foundCar = cars.find((car) => car.id === req.params.id);
    res.json(foundCar);
})

carsRouter.post("/cars", (req, res) => {
    if (!req.body.reg) {
        return res.status(400).json({ error: "Reg.nummer saknas" });
    }

    cars.push({
        id: uuid.v4(),
        reg: req.body.reg
    })

    const reg = req.body.reg;
    res.send(reg);
})

carsRouter.delete("/cars/:id", (req, res) => {
    cars = cars.filter((car) => car.id !== req.params.id);
    res.json(cars);
})

app.use(ownersRouter);
app.use(carsRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Något gick sönder!")
})

app.listen(PORT, () => {
    console.log(`Servern kör på port ${PORT}`);
})