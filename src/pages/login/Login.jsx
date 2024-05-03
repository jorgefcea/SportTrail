import React, { useState } from 'react';
import "./login.scss";
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [passwordError, setPasswordError] = useState(false); // Añadir el estado passwordError
  const [submitted, setSubmitted] = useState(false); // Añadir el estado submitted

  const handleSubmit = (event) => { // Añadir la función handleSubmit que valida la contraseña
    event.preventDefault();
    setSubmitted(true);
    const password = document.getElementById('password').value;
    setPasswordError(submitted && !isValidPassword(password));
  };

  const isValidPassword = (password) => { // Añadir la función isValidPassword que valida la contraseña
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };

  const { login } = useContext(AuthContext); // Variable currentUser que indica si el usuario está logueado o no

  const handleLogin = () => { // Añadir la función handleLogin que loguea al usuario
    login();
  }

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
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre de usuario" required/>
            <input type="password" id="password" placeholder="Contraseña" required/>
            {submitted && passwordError && <small style={{ color: 'red' }}>* La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.</small>}
            <button onClick={handleLogin}>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
