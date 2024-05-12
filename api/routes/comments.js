import express from "express";
import {
  getComments,
  addComment,
  deleteComment,
} from "../controllers/comment.js";

const router = express.Router(); // Crear un router para manejar las rutas de comentarios

router.get("/", getComments); // Crear la ruta para obtener los comentarios
router.post("/", addComment); // Crear la ruta para añadir un comentario
router.delete("/:id", deleteComment); // Crear la ruta para eliminar un comentario

export default router;