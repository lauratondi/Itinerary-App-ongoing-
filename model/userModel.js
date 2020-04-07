const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

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

module.exports = User = mongoose.model('user', userSchema, 'users')