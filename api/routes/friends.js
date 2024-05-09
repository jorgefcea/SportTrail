import express from "express";
import { getFriends } from "../controllers/friend.js"; // Corregir la ruta de importación

const router = express.Router();

// Ruta para obtener amigos conectados de un usuario
router.get("/", getFriends);

export default router;
