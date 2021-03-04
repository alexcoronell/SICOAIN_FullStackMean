const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const companiesSchema = new Schema({
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
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Companies', companiesSchema);