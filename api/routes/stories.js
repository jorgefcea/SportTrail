import express from "express";
import { getAllUsers } from "../controllers/story.js";

const router = express.Router(); // Crear un router para manejar las rutas de usuarios

router.get("/", getAllUsers); // Ruta para obtener todos los usuarios

export default router;
