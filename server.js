const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const ownersController = require("./controllers/owners.controller");
const carsController = require("./controllers/cars.controller");

const PORT = process.env.PORT || 4000

const app = express();

// const relations = [];

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

const ownersRouter = express.Router();
const carsRouter = express.Router();

//Relations
// app.post("/relations", (req, res) => {
//     if (!req.body.ownerId || !req.body.carId) {
//         return res.status(400).json({ error: "Id saknas" });
//     }
//     relations.push({
//         ownerId: req.body.ownerId,
//         carId: req.body.carId
//     })
//     res.json(relations);
// })

//Owners
ownersRouter.get("/owners", ownersController.getOwners);

ownersRouter.get("/owners/:id", ownersController.getOwner);

ownersRouter.post("/owners", ownersController.addOwner);

ownersRouter.delete("/owners/:id", ownersController.deleteOwner);

//Cars
carsRouter.get("/cars", carsController.getCars);

carsRouter.get("/cars/:id", carsController.getCar);

carsRouter.post("/cars", carsController.addCar);

carsRouter.delete("/cars/:id", carsController.deleteCar);

app.use(ownersRouter);
app.use(carsRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Något gick sönder!")
})

app.listen(PORT, () => {
    console.log(`Servern kör på port ${PORT}`);
})