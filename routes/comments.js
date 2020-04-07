const express = require('express');
const router = express.Router();
const commentModel = require('../model/commentModel');
const auth = require('../middleware/auth');

router.get('/:id',
    (req, res) => {
        let itineraryId = req.params.id;
        commentModel.find({ itineraryId: itineraryId })
            .then(comments => {
                res.send(comments)
            })
            .catch(err => console.log(err))


    })

router.post('/:id', auth, (req, res) => {
    console.log("in the function")
    const newComment = new commentModel({
        userId: req.body.userId,
        itineraryId: req.body.itineraryId,
        date: req.body.date,
        text: req.body.text
    })
    console.log("comment created")
    newComment.save()
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(300).send('Server error')
        })
});

module.exports = router
