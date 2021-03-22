const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const venuesSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Venues', venuesSchema);