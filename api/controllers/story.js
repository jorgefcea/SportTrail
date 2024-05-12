import { db } from "../connect.js";

export const getAllUsers = (req, res) => { // Obtener todos los usuarios
  const q = "SELECT * FROM users"; // Consulta a la base de datos para obtener todos los usuarios

  db.query(q, (err, data) => { 
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
};
