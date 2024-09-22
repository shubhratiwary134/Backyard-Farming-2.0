import { Request, Response } from "express";

const Plantorium = require("../Models/PlantoriumModel");
export const getFamousCrops = async (req: Request, res: Response) => {
  const famousCrops = await Plantorium.find({ famous: true });
  return res.status(200).send(famousCrops);
};
