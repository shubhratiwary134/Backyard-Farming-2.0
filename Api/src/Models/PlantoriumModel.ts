import mongoose from "mongoose";

const plantoriumSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  averageRainfall: {
    type: Number, // Average rainfall in mm
    required: true,
  },
  soilType: {
    type: String, // e.g., Humus, Loamy, Sandy, Alluvial
    required: true,
  },
  soilColor: {
    type: String, // e.g., Black, Brownish
    required: true,
  },
  soilTexture: {
    type: String, // e.g., Soft, Hard, Airy
    required: true,
  },
  soilPH: {
    type: Number, // pH value of the soil
    required: true,
  },
  pastCrops: [
    {
      type: String, // List of crops grown in the past 3 years
    },
  ],
  cropDiseases: [
    {
      type: String, // List of diseases that have affected crops
    },
  ],
  affectedCrops: [
    {
      type: String, // List of crops affected by diseases
    },
  ],
  waterSupply: {
    type: String, // e.g., Channel, Tube Well, Other
    required: true,
  },
  landArea: {
    type: Number, // Area of the land in acres or square meters
    required: true,
  },
  famous: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Plantorium = mongoose.model("Plantorium", plantoriumSchema);
module.exports = Plantorium;
