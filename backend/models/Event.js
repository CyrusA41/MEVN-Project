const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    type: String,
    location: String,
    date: String,
    time: String,
    description: String
});

export default mongoose.model('Event', userSchema);