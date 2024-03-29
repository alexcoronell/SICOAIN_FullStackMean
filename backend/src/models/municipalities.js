const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const municipalitiesSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    idDepartamento: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Municipalities', municipalitiesSchema);