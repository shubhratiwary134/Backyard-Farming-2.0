import mongoose from "mongoose";

const plantoriumSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "User",
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
    min: 0,
    max: 14,
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
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  photos: [
    {
      type: String,
    },
  ],
});

const Plantorium = mongoose.model("Plantorium", plantoriumSchema);
module.exports = Plantorium;
