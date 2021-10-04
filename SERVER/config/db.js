const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error: " + error);
  }
};

module.exports = connectDB;
