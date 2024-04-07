const mongoose = require('mongoose');

// Replace <password> with your MongoDB Atlas password

const mongoURI = 'mongodb+srv://cyrus123:freddyissweaty@mongo.5dhnmr6.mongodb.net/?retryWrites=true&w=majority&appName=Mongo'

  const connectToMongoDB = async (uri) => {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
    }
  };

  connectToMongoDB(mongoURI)
  
module.exports = connectToMongoDB;