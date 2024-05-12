import express from "express";
import { getRelationships, addRelationship, deleteRelationship } from "../controllers/relationship.js";

const router = express.Router(); // Crear un router para manejar las rutas de relaciones

router.get("/", getRelationships); // Crear la ruta para obtener las relaciones
router.post("/", addRelationship); // Crear la ruta para añadir una relación
router.delete("/", deleteRelationship); // Crear la ruta para eliminar una relación


export default router;