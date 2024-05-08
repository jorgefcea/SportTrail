import { db } from "../connect.js";

export const getRecommendations = async (req, res) => {
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

    let recommendations = [];

    // Verificar si el usuario tiene relaciones
    if (relationships.length === 0) {
      // Si el usuario no sigue a nadie, simplemente obtén recomendaciones aleatorias
      const qAllUsers = `SELECT * FROM users WHERE id != ? ORDER BY RAND() LIMIT 5`;
      recommendations = await new Promise((resolve, reject) => {
        db.query(qAllUsers, [userId], (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });
    } else {
      // Si el usuario sigue a otros usuarios, utiliza la lista de relaciones en la consulta
      const qWithRelationships = `
        SELECT * FROM users 
        WHERE id != ? AND id NOT IN (
          SELECT followedUserId FROM relationships WHERE followerUserId = ?
        )
        ORDER BY RAND() LIMIT 5`;
      recommendations = await new Promise((resolve, reject) => {
        db.query(qWithRelationships, [userId, userId], (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });
    }

    res.status(200).json(recommendations);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
