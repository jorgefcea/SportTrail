import express from "express";
const app = express(); // Crear una instancia de express
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";
import recommendationRoutes from "./routes/recommendations.js"; 
import friendsRoutes from "./routes/friends.js"; 
import storiesRoutes from "./routes/stories.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

// Configurar el servidor para recibir y enviar datos en formato JSON (middleware) y habilitar CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => { // Habilitar CORS
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser()); // Habilitar el uso de cookies

const storage = multer.diskStorage({ // Configurar el almacenamiento de archivos
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage }); // Crear una instancia de multer

app.post("/api/upload", upload.single("file"), (req, res) => { // Subir un archivo
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/friends", friendsRoutes);
app.use("/api/stories", storiesRoutes);

app.listen(8800, () => { // Iniciar el servidor en el puerto 8800
    console.log("¡Servidor iniciado!");
});
