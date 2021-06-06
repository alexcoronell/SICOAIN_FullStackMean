const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const positionsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Positions', positionsSchema);