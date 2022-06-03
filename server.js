const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const ownersRouter = require("./routers/owners.router");
const carsRouter = require("./routers/cars.router");

const PORT = process.env.PORT || 4000

const app = express();

// const relations = [];

app.use(cors());
app.use(bodyParser.json());

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

app.use(ownersRouter);
app.use(carsRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Något gick sönder!")
})

app.listen(PORT, () => {
    console.log(`Servern kör på port ${PORT}`);
})