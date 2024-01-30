const mongoose = require('mongoose');

let mongoServer;
const uri="mongodb+srv://sckchcm:17%40$aksham@cluster0.rpxpqex.mongodb.net/?retryWrites=true&w=majority"

const startDatabase = async () => {
  await mongoose.connect(uri)
};

const stopDatabase = async () => {
  await mongoose.disconnect()
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
