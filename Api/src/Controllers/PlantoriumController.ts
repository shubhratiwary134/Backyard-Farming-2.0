import { Request, Response } from "express";
import cloudinary from "../Config/cloudinaryConfig";
const Plantorium = require("../Models/PlantoriumModel");
export const createPlantorium = async (req: Request, res: Response) => {
  const data = req.body;
  if (!data) {
    return res
      .status(400)
      .json({ message: "Cannot create Plantorium: missing Fields " });
  }
  const {
    userId,
    averageRainfall,
    soilType,
    soilColor,
    soilTexture,
    soilPH,
    pastCrops,
    cropDiseases,
    affectedCrops,
    waterSupply,
    landArea,
    famous,
    createdAt,
  } = req.body;
  const Photos = req.files as Express.Multer.File[]; // multer middleware makes it possible for us to access the photos in req.files
  if (!Photos || Photos.length === 0) {
    return res.status(400).json({ message: "No photos uploaded" });
  }

  try {
    // Upload photos to Cloudinary and get URLs
    const uploadPromises = Photos.map(
      (photo) =>
        new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { resource_type: "auto", folder: "Plantify_Farm_Images" }, // Automatically detects file type
              (error, result) => {
                if (error) {
                  reject(new Error("Image upload failed"));
                } else {
                  resolve(result.secure_url);
                }
              }
            )
            .end(photo.buffer); // Use photo.buffer for multer's in-memory file
        })
    );
    const imageUrls = await Promise.all(uploadPromises);

    await Plantorium.create({
      userId,
      averageRainfall,
      soilType,
      soilColor,
      soilTexture,
      soilPH,
      pastCrops,
      cropDiseases,
      affectedCrops,
      waterSupply,
      landArea,
      famous,
      createdAt,
      photos: imageUrls,
    });
    res.status(201).json({ message: "plantorium successfully created" });
  } catch (err) {
    console.log(err);
  }
};

export const getSpecificPlantorium = async (req: Request, res: Response) => {
  const plantoriumId = req.params.id;
  try {
    const plantorium = await Plantorium.findById(plantoriumId);
    if (!plantorium) {
      return res.status(404).json({ message: "Plantorium not found" });
    }
    return res.status(200).json(plantorium);
  } catch (err) {
    res.status(500).json({ message: "Error fetching plantorium", err });
  }
};

export const deleteSpecificPlantorium = async (req: Request, res: Response) => {
  const plantoriumId = req.params.id;
  try {
    const deletedPlantorium = await Plantorium.findByIdAndDelete(plantoriumId);
    if (!deletedPlantorium) {
      return res.status(404).json({ message: "Plantorium not found" });
    }
    res.status(200).json({ message: "Plantorium successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: "error deleting the plantorium" });
  }
};

export const updateSpecificPlantorium = async (req: Request, res: Response) => {
  const plantoriumId = req.params.id;
  try {
    const updatedPlantorium = await Plantorium.findByIdAndUpdate(
      plantoriumId,
      req.body,
      { new: true, runValidators: true }
      // new:true ensures that findByIdAndUpdate returns the updated document .
      // runValidators: true ensures that findByIdAndUpdate returns after the schema validation is complete .
    );
    if (!updatedPlantorium) {
      return res.status(404).json({ message: "Plantorium not found" });
    }
    res.status(200).json(updatedPlantorium);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getUserPlantoriums = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    // find all the plantoriums associated with the user .
    const plantoriums = await Plantorium.find({ userId });
    if (!plantoriums) {
      return res
        .status(404)
        .json({ message: "no plantoriums found for the user" });
    }
    return res.status(200).json(plantoriums);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "problem in getting the Plantoriums" });
  }
};
