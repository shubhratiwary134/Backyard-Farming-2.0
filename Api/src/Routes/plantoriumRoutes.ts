import upload from "../Config/multerConfig";
import {
  createPlantorium,
  deleteSpecificPlantorium,
  getGeneratedReport,
  getSpecificPlantorium,
  getUserPlantoriums,
  updateSpecificPlantorium,
} from "../Controllers/PlantoriumController";
const express = require("express");

const plantoriumRoutes = express.Router();

plantoriumRoutes.post(
  "/createNew",
  upload.array("Photos", 4),
  createPlantorium
);
plantoriumRoutes.get("/:id", getSpecificPlantorium);
plantoriumRoutes.delete("/:id", deleteSpecificPlantorium);
plantoriumRoutes.put("/:id", updateSpecificPlantorium);
plantoriumRoutes.get("/user/:id", getUserPlantoriums);
plantoriumRoutes.post("/generateReport", getGeneratedReport);
export default plantoriumRoutes;
