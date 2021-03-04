const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const campusSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
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

module.exports = mongoose.model('Campus', campusSchema);