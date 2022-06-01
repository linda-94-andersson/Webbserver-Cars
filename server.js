const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const uuid = require('uuid');

const PORT = process.env.PORT || 4000

const app = express();

let owners = [];

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

const ownersRouter = express.Router();

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
    console.log(owners); 
    res.json(owners);
})

app.use(ownersRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Något gick sönder!")
})

app.listen(PORT, () => {
    console.log(`Servern kör på port ${PORT}`);
})