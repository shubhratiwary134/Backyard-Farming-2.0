import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reportText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
