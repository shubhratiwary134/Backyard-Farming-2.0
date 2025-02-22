import upload from "../Config/multerConfig";
import {
  createPlantorium,
  deleteSpecificPlantorium,
  getSpecificPlantorium,
  getUserPlantoriums,
  postGeneratedReport,
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
plantoriumRoutes.post("/generateReport", postGeneratedReport);
export default plantoriumRoutes;
