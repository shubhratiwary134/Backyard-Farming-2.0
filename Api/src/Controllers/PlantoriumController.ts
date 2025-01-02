import { Request, Response } from "express";
import cloudinary from "../Config/cloudinaryConfig";
import axios from "axios";
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
    Address,
    createdAt,
  } = req.body;
  const Photos = req.files as Express.Multer.File[]; // multer middleware makes it possible for us to access the photos in req.files

  /* This Part of the Code could be used in future if
   we want to make the photos are required but
   note that commenting this Out also means that
    you need to change the Yup (validationSchema) 
    in the frontend from nullable to required */

  /* 
   if (!Photos || Photos.length === 0) {
    return res.status(400).json({ message: "No photos uploaded" });
   }
  
  */

  try {
    // Upload photos to Cloudinary and get URLs
    let imageUrls: string[] = [];
    if (Photos && Photos.length > 0) {
      const uploadPromises: Promise<string>[] = Photos.map(
        (photo) =>
          new Promise((resolve, reject) => {
            cloudinary.uploader
              .upload_stream(
                { resource_type: "auto", folder: "Plantify_Farm_Images" },
                (error, result) => {
                  if (error) {
                    reject(new Error(`Image upload failed: ${error.message} `));
                  } else if (result && result.secure_url) {
                    resolve(result.secure_url);
                  } else {
                    reject(
                      new Error("Image upload failed: result is undefined.")
                    );
                  }
                }
              )
              .end(photo.buffer); // Use photo.buffer for multer's in-memory file
          })
      );
      imageUrls = await Promise.all(uploadPromises);
    }

    const plantorium = await Plantorium.create({
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
      Address,
      photos: imageUrls,
    });
    const cropChoicesResponse = await axios.post(
      "http://localhost:3000/predictCrops",
      plantorium
    );
    const cropChoices = cropChoicesResponse.data.cropChoices;
    res.status(201).json({
      message: "plantorium successfully created",
      plantorium,
      cropChoices,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occurred while creating Plantorium" });
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
    const plantoriums = await Plantorium.find({ userId: userId });
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
