const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const epsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Eps', epsSchema);