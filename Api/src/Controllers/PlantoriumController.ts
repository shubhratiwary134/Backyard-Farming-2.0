import { Request, Response } from "express";
import cloudinary from "../Config/cloudinaryConfig";
import axios from "axios";
import mongoose from "mongoose";
const Plantorium = require("../Models/PlantoriumModel");
const User = require("../Models/UserModel");
const Report = require("../Models/ReportModel");
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
    await User.findOneAndUpdate({ clerkUserId: userId }, { hasFarm: true });
    res.status(201).json({
      message: "plantorium successfully created",
      plantorium,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occurred while creating Plantorium" });
  }
};

export const postGeneratedReport = async (req: Request, res: Response) => {
  const { crop, userId } = req.body;
  if (!crop || !userId) {
    return res
      .status(400)
      .json({ message: "invalid or empty fields in the request" });
  }

  //find the farm associated with the user
  const plantorium = await Plantorium.findOne({ userId });
  if (plantorium) {
    try {
      const plantoriumID = plantorium._id;

      const payload = {
        question: `You are an expert in sustainable agriculture and precision farming. Based on the following user-provided farm details, generate a comprehensive Backyard Farming 2.0 report covering:
    
    1. **Soil Analysis** - Evaluate the soil type, texture, pH, and color to determine its fertility and suitability for crops. Suggest any necessary soil amendments.
    2. **Previous Crop Data & Crop Rotation Suggestions** - Analyze past crops grown and suggest an optimal crop rotation plan to maintain soil health and maximize yield.
    3. **Watering & Irrigation Plan** - Recommend an irrigation strategy based on water supply type, average rainfall, and land area. Provide efficient water management techniques.
    4. **Fertilization & Nutrient Management** - Suggest an ideal fertilization plan, including organic or chemical fertilizers, based on soil conditions and nutrient needs.
    5. **Pest & Disease Control** - Assess past crop diseases and affected crops to provide preventive and curative measures for pest and disease management.
    6. **Seasonal Care & Weather Protection** - Provide season-specific farming advice, including temperature variations, frost protection, and extreme weather precautions.
    7. **Expected Yield & Harvesting Guidelines** - Estimate expected yield based on the given conditions and provide best harvesting practices to ensure crop quality.
    
    ### User Input: 
    Average Rainfall in mm - ${plantorium.averageRainfall}
    soilType - ${plantorium.soilType}
    soilColor - ${plantorium.soilColor}
    soilTexture - ${plantorium.soilTexture}
    soilPH - ${plantorium.soilPH}
    pastCrops - ${
      plantorium.pastCrops.length
        ? plantorium.pastCrops.join(", ")
        : "No past crops provided"
    }
    cropDiseases - ${
      plantorium.cropDiseases.length
        ? plantorium.cropDiseases.join(", ")
        : "No crop Diseases provided"
    }
    affectedCrops - ${
      plantorium.affectedCrops.length
        ? plantorium.affectedCrops.join(", ")
        : "No affected Crops provided"
    }
    waterSupply - ${plantorium.waterSupply}
    landArea in square meters - ${plantorium.landArea}
    Address - ${plantorium.Address || "Address not provided"}
    ### Output Format: 
    Provide a structured, detailed report with clear sections and practical, actionable recommendations.`,
      };

      // first hit the rag endpoint /report to create the report
      const response = await axios.post(
        "http://127.0.0.1:5000/api/v1/query",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // store it in DB with report model
      const report = await Report.create({
        plantoriumID,
        reportText: response.data.response,
      });
      // only sending the frontend reportText so that it could easily store it in slice
      const reportText = report.reportText;
      // return the Report to the frontend
      return res
        .status(201)
        .json({ message: "report Created", reportText, reportExists: true });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `something went wrong error: ${err}` });
    }
  }

  return res
    .status(404)
    .json({ message: "Plantorium for this user does not exist" });
};

export const getReport = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const plantorium = await Plantorium.findOne({ userId });
    if (!plantorium) {
      return res.status(404).json({
        message: "No plantorium found for this user",
      });
    }
    const report = await Report.findOne({ plantoriumID: plantorium._id });
    if (!report) {
      return res.status(404).json({
        message: "No Report found for this plantorium",
      });
    }

    const reportText = report.reportText;

    return res.status(200).json({ reportText, reportExists: true });
  } catch (err) {
    console.log("error while fetching report ", err);
    res.status(500).json(err);
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
export const getUserPlantorium = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    // find the plantorium associated with the user.
    const plantorium = await Plantorium.findOne({ userId });
    if (!plantorium) {
      return res
        .status(404)
        .json({ message: "no plantoriums found for the user" });
    }
    return res.status(200).json(plantorium);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: `this is issue in fetching the plantorium for the user error:${err}`,
    });
  }
};
