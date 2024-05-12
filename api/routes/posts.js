import express from "express";
import { getPosts, addPost, deletePost } from "../controllers/post.js";

const router = express.Router(); // Crear un router para manejar las rutas de posts

router.get("/", getPosts); // Crear la ruta para obtener los posts
router.post("/", addPost); // Crear la ruta para añadir un post
router.delete("/:id", deletePost); // Crear la ruta para eliminar un post

export default router;