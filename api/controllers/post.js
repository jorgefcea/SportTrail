import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) => { // Consulta a la base de datos para obtener los posts
  const userId = req.query.userId;
  const token = req.cookies.accessToken;
  
  if (!token) return res.status(401).json("¡No estás logueado!"); // Verificar si el usuario está logueado

  jwt.verify(token, "secretkey", (err, userInfo) => { // Verificar el token
    if (err) return res.status(403).json("¡El token no es válido!");

    let q;
    let values;

    if (userId !== "undefined") { 
      q = `SELECT p.*, u.id AS userId, name, profilePic 
           FROM posts AS p 
           JOIN users AS u ON (u.id = p.userId) 
           WHERE p.userId = ? 
           ORDER BY p.createdAt DESC`; // Obtener los posts de un usuario específico
      values = [userId];
    } else {
      q = `SELECT p.*, u.id AS userId, name, profilePic 
           FROM posts AS p 
           JOIN users AS u ON (u.id = p.userId)
           WHERE p.userId IN (
             SELECT followedUserId
             FROM relationships
             WHERE followerUserId = ?
           ) OR p.userId = ?
           ORDER BY p.createdAt DESC`; // Obtener los posts de los amigos del usuario actual
      values = [userInfo.id, userInfo.id];
    }

    db.query(q, values, (err, data) => { 
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => { // Añadir un post
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estás logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("¡El token no es válido!");

    const q =
      "INSERT INTO posts(`desc`, `img`, `createdAt`, `userId`) VALUES (?)"; // Insertar un nuevo post en la base de datos
    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => { // Crear un nuevo post
      if (err) return res.status(500).json(err);
      return res.status(200).json("El post ha sido creado.");
    });
  });
};
export const deletePost = (req, res) => { // Eliminar un post
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estás logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("¡El token no es válido!");

    const q =
      "DELETE FROM posts WHERE `id`=? AND `userId` = ?"; // Eliminar un post de la base de datos

    db.query(q, [req.params.id, userInfo.id], (err, data) => { // Eliminar un post
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("El post ha sido eliminado.");
      return res.status(403).json("Solo puedes eliminar tus propios posts.")
    });
  });
};