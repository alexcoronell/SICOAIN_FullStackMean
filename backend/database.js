const mongoose = require('mongoose');

const URI = 'mongodb://localhost/sicoain'

mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('MongoDB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose