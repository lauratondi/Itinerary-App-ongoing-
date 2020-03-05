const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({

    city: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    hashtag: {
        type: String,
    },

    activities: {
        type: Array
    }
});

module.exports = mongoose.model('itinerary', itinerarySchema, 'itineraries')