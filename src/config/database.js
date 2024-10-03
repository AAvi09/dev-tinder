const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sharmaavi2196:uyaLZz9kUUqE5Sx7@mahadev.dx5lt.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
