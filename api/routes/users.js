import Express from 'express';
import { getUser } from '../controllers/user.js';

const router = Express.Router(); // Crea una instancia de un router de express que manejará las rutas de los usuarios

router.get('/find/:userId', getUser); // Ruta para obtener un usuario por su id

export default router;