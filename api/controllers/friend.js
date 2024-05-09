import { db } from "../connect.js";

export const getFriends = async (req, res) => {
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

    let friends = [];

    // Verificar si el usuario tiene relaciones
    if (relationships.length > 0) {
      // Si el usuario sigue a otros usuarios, utiliza la lista de relaciones en la consulta
      const qWithRelationships = `
        SELECT * FROM users 
        WHERE id IN (?)`;
      friends = await new Promise((resolve, reject) => {
        db.query(qWithRelationships, [relationships], (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });
    }

    res.status(200).json(friends);
  } catch (error) {
    console.error("Error fetching friends:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
