import { db } from "../connect.js";

export const getFriends = async (req, res) => { // Obtener los amigos de un usuario
  try {
    const userId = req.query.userId;

    // Obtener las relaciones del usuario actual
    const relationships = await new Promise((resolve, reject) => {
      const q = "SELECT followedUserId FROM relationships WHERE followerUserId = ?";
      db.query(q, [userId], (err, data) => { 
        if (err) reject(err);
        else resolve(data.map(relationship => relationship.followedUserId));
      });
    });

    let friends = []; // Lista de amigos del usuario actual

    // Verificar si el usuario tiene relaciones
    if (relationships.length > 0) {
      // Si el usuario sigue a otros usuarios, utiliza la lista de relaciones en la consulta
      const qWithRelationships = `
        SELECT * FROM users 
        WHERE id IN (?)`; // Obtener los amigos del usuario actual
      friends = await new Promise((resolve, reject) => {
        db.query(qWithRelationships, [relationships], (err, data) => { 
          if (err) reject(err);
          else resolve(data);
        });
      });
    }

    res.status(200).json(friends);
  } catch (error) {
    console.error("Error al buscar amigos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
