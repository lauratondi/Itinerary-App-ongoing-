const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel');

// GET itineraries for city

router.get('/:name',
    (req, res) => {
        console.log(req.params.name)
        let cityRequested = req.params.name;
        console.log(cityRequested)
        itineraryModel.find({ city: cityRequested })
            .then(city => {
                res.send(city)
            })
            .catch(err => console.log(err));
    });

module.exports = router;