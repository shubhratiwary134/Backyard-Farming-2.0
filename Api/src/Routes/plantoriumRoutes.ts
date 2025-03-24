import upload from "../Config/multerConfig";
import {
  createPlantorium,
  deleteSpecificPlantorium,
  getReport,
  getSpecificPlantorium,
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
plantoriumRoutes.post("/generateReport", postGeneratedReport);
plantoriumRoutes.get("/getReport/:id", getReport);
export default plantoriumRoutes;
