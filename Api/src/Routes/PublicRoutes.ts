const express = require("express");
import { getFamousCrops } from "../Controllers/cropController";

const router = express.Router();

router.get("/famousCrops", getFamousCrops);

export default router;
