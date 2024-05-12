import express from "express";
import { getLikes, addLike, deleteLike } from "../controllers/like.js";

const router = express.Router(); // Crear un router para manejar las rutas de likes

router.get("/", getLikes); // Crear la ruta para obtener los likes
router.post("/", addLike); // Crear la ruta para añadir un like
router.delete("/", deleteLike); // Crear la ruta para eliminar un like


export default router;