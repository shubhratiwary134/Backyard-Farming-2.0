import { createPlantorium } from "../Controllers/PlantoriumController";
const express = require("express");

const plantoriumRoutes = express.Router();

plantoriumRoutes.post("/createNew", createPlantorium);

export default plantoriumRoutes;
