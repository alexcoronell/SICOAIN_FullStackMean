const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const employeesSchema = new Schema({
    tipoIdentificacion: {
        type: String,
        required: true
    },
    numeroIdentificacion: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    lastNames: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    municipality: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    campus: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    eps: {
        type: String,
        required: true
    },
    arl: {
        type: String,
        required: true
    },
    emergencyContactName: {
        type: String,
        required: true
    },
    emergencyContactPhone: {
        type: String,
        required: true
    },
    emergencyContactRelationship: {
        type: String,
        required: true
    },
    coments: {
        type: String,
        required: true
    },
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Employees', employeesSchema);