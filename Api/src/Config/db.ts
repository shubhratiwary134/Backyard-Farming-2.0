const mongoose = require("mongoose");

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shubhra-todo:shubhra-todo@cluster0.kjzuilm.mongodb.net/"
    );
    console.log("successfully connected to the database");
  } catch (err) {
    console.error("error connecting to the database");
    process.exit(1);
  }
};

export const closeConnectionMongoDB = async () => {
  await mongoose.connection.close();
};
