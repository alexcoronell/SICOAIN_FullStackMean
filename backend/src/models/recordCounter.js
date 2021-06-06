const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const recordCounterSchema = new Schema({
    records: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('RecordCounter', recordCounterSchema);