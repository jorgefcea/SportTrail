import express from "express";
import { getFriends } from "../controllers/friend.js"; 

const router = express.Router(); // Crear un router para manejar las rutas de amigos

router.get("/", getFriends); // Ruta para obtener amigos conectados de un usuario

export default router;
