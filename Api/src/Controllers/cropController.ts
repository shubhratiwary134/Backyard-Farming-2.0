import { Request, Response } from "express";
import mongoose from "mongoose";

export const getFamousCrops = async (req: Request, res: Response) => {
  try {
    const crops = await mongoose.connection
      .collection("famousCrops")
      .find({}) // if find is left empty it returns every document in the collection
      .toArray();
    res.status(200).json(crops);
  } catch (err) {
    res.status(500).send("Error retrieving crops: " + err);
  }
};

// getSpecificCrop endpoint
