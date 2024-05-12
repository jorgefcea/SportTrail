import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req,res)=>{ // Obtener los seguidores de un usuario
    const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?"; // Consulta a la base de datos para obtener los seguidores de un usuario

    db.query(q, [req.query.followedUserId], (err, data) => { 
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.map(relationship=>relationship.followerUserId));
    });
}

export const addRelationship = (req, res) => { // Añadir una relación de seguidor
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estas logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("¡El token no es válido!");

    const q = "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?)"; // Insertar una nueva relación de seguidor en la base de datos
    const values = [
      userInfo.id,
      req.body.userId
    ];

    db.query(q, [values], (err, data) => { // Crear una nueva relación de seguidor
      if (err) return res.status(500).json(err);
      return res.status(200).json("Siguiendo");
    });
  });
};

export const deleteRelationship = (req, res) => { // Eliminar una relación de seguidor

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estas logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("¡El token no es válido!");

    const q = "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?"; // Eliminar una relación de seguidor de la base de datos

    db.query(q, [userInfo.id, req.query.userId], (err, data) => { // Eliminar una relación de seguidor
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollow");
    });
  });
};