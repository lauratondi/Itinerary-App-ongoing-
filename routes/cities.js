const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');
const auth = require('../middleware/auth');

// GET all cities
router.get('/all', (req, res) => {
    cityModel.find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});

// POST a new city

router.post('/', auth, (req, res) => {
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country,
        img: req.body.img

    })
    newCity.save()
        .then(city => {
            res.send(city)
        })
        .catch(err => {
            res.status(500).send('Server error')
        })
});


// Test with Postman
router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

module.exports = router;