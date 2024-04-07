const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    type: String,
    location: String,
    date: String,
    time: String,
    description: String
});

module.exports = mongoose.model('Event', userSchema);