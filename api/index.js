import Express from 'express'; // Importa el módulo express 
const app = Express(); // Crea una instancia de express
import authRouter from './routes/auth.js';
import commentRouter from './routes/comments.js';
import likeRouter from './routes/likes.js';
import postRouter from './routes/posts.js';
import userRouter from './routes/users.js';

app.use('/api/users', userRouter); // Usa el router de usuarios en la ruta /api/users
app.use('/api/auth', authRouter); // Usa el router de autenticación en la ruta /api/auth
app.use('/api/posts', postRouter); // Usa el router de publicaciones en la ruta /api/posts
app.use('/api/comments', commentRouter); // Usa el router de comentarios en la ruta /api/comments
app.use('/api/likes', likeRouter); // Usa el router de likes en la ruta /api/likes


app.listen(8800, () => { // Inicia el servidor en el puerto 8800
    console.log('Server is running on port 8800');
});