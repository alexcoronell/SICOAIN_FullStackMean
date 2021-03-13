const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

UserSchema.pre('save', function(next) {
    bcrypt.genSalt(10)
        .then(salts => {
            bcrypt.hash(this.password, salts)
                .then(hash => {
                    this.password = hash;
                    next();
                })
                .catch(error => next(error));
        })
        .catch(error => next(error));
});

module.exports = mongoose.model('Users', UserSchema);