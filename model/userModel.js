const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    username: {
        type: String
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String
    },


})

module.exports = mongoose.model('user', userSchema, 'users')