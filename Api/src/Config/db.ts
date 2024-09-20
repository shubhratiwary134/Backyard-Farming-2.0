// Configuring the DATABASE
const mongoose = require("mongoose");

export const connectMongoDB = async () => {
  const MongoDBUrl = process.env.MongoUrl;
  try {
    await mongoose.connect(MongoDBUrl);
    console.log("successfully connected to the database");
  } catch (err) {
    console.error("error connecting to the database");
    process.exit(1);
  }
};

export const closeConnectionMongoDB = async () => {
  await mongoose.connection.close();
};
