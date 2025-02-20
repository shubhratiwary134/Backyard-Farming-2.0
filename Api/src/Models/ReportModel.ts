import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  FarmID: { type: mongoose.Schema.Types.ObjectId, ref: "Farm", required: true },
  ReportText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
