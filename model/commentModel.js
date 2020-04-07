const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({

    userId: {
        type: String,

    },
    itineraryId: {
        type: String,
    },
    date: {
        type: Date,
        default: new Date()
    },

    text: {
        type: String
    }
})

module.exports = mongoose.model('comment', commentSchema, 'comments')