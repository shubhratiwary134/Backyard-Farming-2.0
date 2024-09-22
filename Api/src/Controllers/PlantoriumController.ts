import { Request, Response } from "express";
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
  try {
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
