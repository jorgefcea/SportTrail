import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req, res) => { // Consulta a la base de datos para obtener los comentarios de un post
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId)
    WHERE c.postId = ? ORDER BY c.createdAt DESC
    `;

  db.query(q, [req.query.postId], (err, data) => { // Obtener los comentarios de un post
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addComment = (req, res) => { // Añadir un comentario a un post
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estas logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => { // Verificar el token
    if (err) return res.status(403).json("¡Token no válido!");

    const q = "INSERT INTO comments(`desc`, `createdAt`, `userId`, `postId`) VALUES (?)"; // Insertar un nuevo comentario en la base de datos
    const values = [ // Valores a insertar
      req.body.desc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId
    ];

    db.query(q, [values], (err, data) => { // Crear un nuevo comentario
      if (err) return res.status(500).json(err);
      return res.status(200).json("El comentario ha sido creado.");
    });
  });
};

export const deleteComment = (req, res) => { // Eliminar un comentario
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estas logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => { // Verificar el token
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM comments WHERE `id` = ? AND `userId` = ?"; // Eliminar un comentario de la base de datos

    db.query(q, [req.params.id, userInfo.id], (err, data) => { // Eliminar un comentario
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("El comentario ha sido eliminado.");
      return res.status(403).json("¡Solo puedes eliminar tus propios comentarios!");
    });
  });
};