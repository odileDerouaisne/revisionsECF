const express = require('express');
const app = express();
const parkings = require('./parkings.json');

// Middleware
app.use(express.json())

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
});


app.get('/parkings/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
});

app.post('parkings', (req, res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
});

app.listen(3000, () => {
    console.log("Serveur à l'écoute c'est un test");
});