const express = require("express");
import { getFamousCrops } from "../Controllers/cropController";

const publicRouter = express.Router();

publicRouter.get("/famousCrops", getFamousCrops);

export default publicRouter;
