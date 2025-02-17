import express from "express";
import {
  getDalleGreeting,
  generateImage,
} from "../controllers/dalleController.js";

const router = express.Router();

router.get("/", getDalleGreeting);
router.post("/", generateImage);

export default router;
