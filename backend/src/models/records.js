const mongoose = require('mongoose');

const {Schema} = mongoose;

const recordSchema = new Schema({
    idRecord: {
        type: Number,
        required: true
    },
    employee: {
        type: String,
        required: true
    },
    employeeName: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    dateIncident: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: false
    },
    reasonForCancellation: {
        type: String,
        required: false
    },
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Record', recordSchema);
