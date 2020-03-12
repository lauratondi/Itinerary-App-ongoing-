const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({

    userId: {
        type: String,

    },
    itieraryId: {
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