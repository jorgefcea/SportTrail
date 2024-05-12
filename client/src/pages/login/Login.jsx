import React, { useState } from 'react';
import "./login.scss";
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import { useNavigate } from 'react-router-dom';

const Login = () => { // Componente para mostrar el formulario de inicio de sesión
  const [inputs, setInputs] = useState({ // Estado para almacenar los datos del formulario
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null); // Estado para almacenar errores

  const navigate = useNavigate(); // Hook para la navegación

  const handleChange = (e) => { // Función para manejar los cambios en los inputs
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext); // Función de inicio de sesión

  const handleLogin = async (e) => { // Función para manejar el inicio de sesión
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <img src={logo} alt="Logo SportTrail"/>
          <p>
            ¡Bienvenid@ a nuestra comunidad! 
            Sumérgete en la exploración de emocionantes rutas y 
            conecta con otros entusiastas del deporte que te apasiona. ¡Estamos 
            emocionados de ser parte de tu próxima gran experiencia!          
          </p>
          <span>¿Todavía no estás registrado?</span>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </div>
        <div className="right">
          <h1>¡Bienvenido de nuevo!</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Nombre de usuario" name="username" required onChange={handleChange}/>
            <input type="password" id="password" placeholder="Contraseña" name="password" required onChange={handleChange}/>
            {err && <small style={{ color: 'red' }}>{err}</small>}
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
