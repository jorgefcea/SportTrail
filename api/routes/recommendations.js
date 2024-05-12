import express from "express";
import { getRecommendations } from "../controllers/recommendation.js";

const router = express.Router(); // Crear un router para manejar las rutas de recomendaciones

router.get("/", getRecommendations); // Ruta para obtener recomendaciones de usuarios

export default router;
