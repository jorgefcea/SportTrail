import express from "express";
import { login,register,logout } from "../controllers/auth.js";

const router = express.Router(); // Crear un router para manejar las rutas de autenticación

router.post("/login", login); // Crear la ruta para el login
router.post("/register", register); // Crear la ruta para el registro
router.post("/logout", logout); // Crear la ruta para el logout


export default router;