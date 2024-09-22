import {
  createPlantorium,
  deleteSpecificPlantorium,
  getSpecificPlantorium,
} from "../Controllers/PlantoriumController";
const express = require("express");

const plantoriumRoutes = express.Router();

plantoriumRoutes.post("/createNew", createPlantorium);
plantoriumRoutes.get("/:id", getSpecificPlantorium);
plantoriumRoutes.delete("/:id", deleteSpecificPlantorium);
export default plantoriumRoutes;
