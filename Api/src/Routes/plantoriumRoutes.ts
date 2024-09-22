import {
  createPlantorium,
  getSpecificPlantorium,
} from "../Controllers/PlantoriumController";
const express = require("express");

const plantoriumRoutes = express.Router();

plantoriumRoutes.post("/createNew", createPlantorium);
plantoriumRoutes.get("/:id", getSpecificPlantorium);
export default plantoriumRoutes;
