const express = require('express');
const router = express.Router();
const commentModel = require('../model/commentModel');
const auth = require('../middleware/auth');

router.get(`/itineraries/${id}`,
    (req, res) => {
        let itineraryId = req.params.itineraries.id;
        commentModel.find({ comment: itineraryId })
            .then(comment => {
                res.send(comment)
            })
            .catch(err => console.log(err))


    })

router.post('/', auth, (req, res) => {
    const newComment = new commentModel({
        userId: req.body.user.id,
        itineraryId: req.body.itinerary.id,
        date: req.body.date,
        text: req.body.text
    })
    newComment.save()
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(300).send('Server error')
        })
});

module.exports = router
