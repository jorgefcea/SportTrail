import mysql from "mysql";

export const db = mysql.createConnection({ // Crear una conexión a la base de datos
  host:"localhost",
  user:"root",
  password:"root",
  database:"sporttrail"
});