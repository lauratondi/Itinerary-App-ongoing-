const express = require('express');
const router = express.Router();
const commentModel = require('../model/commentModel');
const auth = require('../middleware/auth');

router.get('/:id',
    (req, res) => {
        let itineraryId = req.params.id;
        commentModel.find({ itinerayId: itineraryId })
            .then(comments => {
                res.send(comments)
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
