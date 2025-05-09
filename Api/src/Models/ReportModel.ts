import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  plantoriumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plantorium",
    required: true,
    unique: true,
  },
  reportText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
