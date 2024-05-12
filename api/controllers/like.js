import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req,res)=>{ // Obtener los likes de un post
    const q = "SELECT userId FROM likes WHERE postId = ?";

    db.query(q, [req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.map(like=>like.userId));
    });
}

export const addLike = (req, res) => { // Añadir un like a un post
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estas logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => { // Verificar el token
    if (err) return res.status(403).json("¡El token no es válido!");

    const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)"; // Insertar un nuevo like en la base de datos
    const values = [ // Valores a insertar
      userInfo.id,
      req.body.postId
    ];

    db.query(q, [values], (err, data) => { // Crear un nuevo like
      if (err) return res.status(500).json(err);
      return res.status(200).json("El post ha sido likeado.");
    });
  });
};

export const deleteLike = (req, res) => { // Eliminar un like

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estas logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("¡El token no es válido!");

    const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?"; // Eliminar un like de la base de datos

    db.query(q, [userInfo.id, req.query.postId], (err, data) => { // Eliminar un like
      if (err) return res.status(500).json(err);
      return res.status(200).json("El like ha sido eliminado.");
    });
  });
};