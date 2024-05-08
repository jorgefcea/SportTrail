import express from "express";
import { getRecommendations } from "../controllers/recommendation.js";

const router = express.Router();

// Ruta para obtener recomendaciones de usuarios
router.get("/", getRecommendations);

export default router;
