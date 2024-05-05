import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => { // Registrar un usuario en la base de datos
  //CHECK USER IF EXISTS

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => { // Verificar si el usuario ya existe
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("¡El usuario ya existe!");
    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10); // Generar un salt
    const hashedPassword = bcrypt.hashSync(req.body.password, salt); // Encriptar la contraseña

    // Insetar un nuevo usuario en la base de datos

    const q = "INSERT INTO users (`name`,`username`,`email`,`password`) VALUE (?)";

    const values = [
      req.body.name,
      req.body.username,
      req.body.email,
      hashedPassword,
    ];

    db.query(q, [values], (err, data) => { // Crear un nuevo usuario
      if (err) return res.status(500).json(err);
      return res.status(200).json("El usuario ha sido creado.");
    });
  });
};

export const login = (req, res) => { // Iniciar sesión
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => { // Verificar si el usuario existe
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("¡No se ha encontrado el usuario!");

    const checkPassword = bcrypt.compareSync( // Verificar la contraseña
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("¡Usuario o contraseña incorrectos!");

    const token = jwt.sign({ id: data[0].id }, "secretkey"); // Crear un token

    const { password, ...others } = data[0]; // Eliminar la contraseña del objeto

    // Enviar el token en una cookie que sirve para autenticar al usuario

    res
      .cookie("accessToken", token, { 
        httpOnly: true,
      })
      .status(200) 
      .json(others); 
  });
};

export const logout = (req, res) => { // Cerrar sesión
  res.clearCookie("accessToken",{ // Eliminar la cookie que contiene el token del usuario
    secure:true,
    sameSite:"none"
  }).status(200).json("El usuario ha cerrado sesión.")
};