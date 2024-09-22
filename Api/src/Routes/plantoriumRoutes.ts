import {
  createPlantorium,
  deleteSpecificPlantorium,
  getSpecificPlantorium,
  updateSpecificPlantorium,
} from "../Controllers/PlantoriumController";
const express = require("express");

const plantoriumRoutes = express.Router();

plantoriumRoutes.post("/createNew", createPlantorium);
plantoriumRoutes.get("/:id", getSpecificPlantorium);
plantoriumRoutes.delete("/:id", deleteSpecificPlantorium);
plantoriumRoutes.put("/:id", updateSpecificPlantorium);
export default plantoriumRoutes;
