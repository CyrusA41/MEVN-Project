const mongoose = require('mongoose');
const enviro = require('dotenv')
enviro.config()

// Replace <password> with your MongoDB Atlas password
const mongoURI = `mongodb+srv://cyrus1:ilovecompsci@mevnproject.gop2kft.mongodb.net/?retryWrites=true&w=majority&appName=MEVNProject`;

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