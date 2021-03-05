const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    superuser: {
        type: Boolean,
        required: false
    },
    admin: {
        type: Boolean,
        required: false
    },
    analyst: {
        type: Boolean,
        required: false
    },
    assistant: {
        type: Boolean,
        required: false
    },
    consultant: {
        type: Boolean,
        required: false
    },
    password: {
        type: String,
        requied: true
    },
    condition: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', UserSchema);