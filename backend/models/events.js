const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema);