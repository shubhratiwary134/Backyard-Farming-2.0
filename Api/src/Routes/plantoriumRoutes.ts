import {
  createPlantorium,
  deleteSpecificPlantorium,
  getSpecificPlantorium,
  getUserPlantoriums,
  updateSpecificPlantorium,
} from "../Controllers/PlantoriumController";
const express = require("express");

const plantoriumRoutes = express.Router();

plantoriumRoutes.post("/createNew", createPlantorium);
plantoriumRoutes.get("/:id", getSpecificPlantorium);
plantoriumRoutes.delete("/:id", deleteSpecificPlantorium);
plantoriumRoutes.put("/:id", updateSpecificPlantorium);
plantoriumRoutes.get("/user/:id", getUserPlantoriums);
export default plantoriumRoutes;
