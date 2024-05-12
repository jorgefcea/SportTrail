import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => { // Obtener un usuario
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?"; // Consulta a la base de datos para obtener un usuario

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const updateUser = (req, res) => { // Actualizar un usuario
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("¡No estas logueado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("¡El token no es válido!");

    const q =
      "UPDATE users SET `name`=?,`city`=?,`country`=?,`profilePic`=?,`coverPic`=? WHERE id=? "; // Actualizar un usuario en la base de datos

    db.query( // Actualizar un usuario
      q,
      [
        req.body.name,
        req.body.city,
        req.body.country,
        req.body.coverPic,
        req.body.profilePic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("¡Usuario actualizado!");
        return res.status(403).json("¡No tienes permiso para actualizar este usuario!");
      }
    );
  });
};