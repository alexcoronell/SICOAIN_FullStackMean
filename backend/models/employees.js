const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const employeesSchema = new Schema({
    identificationType: {
        type: String,
        required: true
    },
    identificationNumber: {
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
        required: false
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    venues: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
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
        required: false
    },
    emergencyContactPhone: {
        type: String,
        required: false
    },
    emergencyContactRelationship: {
        type: String,
        required: false
    },
    coments: {
        type: String,
        required: false
    },
    condition: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Employees', employeesSchema);