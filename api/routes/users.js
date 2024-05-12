import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router(); // Crear un router para manejar las rutas de usuarios

router.get("/find/:userId", getUser); // Crear la ruta para obtener un usuario
router.put("/", updateUser); // Crear la ruta para actualizar un usuario

export default router;