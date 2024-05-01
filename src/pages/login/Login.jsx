import React, { useState } from 'react';
import "./login.scss";
import logo from './images/logo.png';
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    const password = document.getElementById('password').value;
    setPasswordError(submitted && !isValidPassword(password));
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
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
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre de usuario" required/>
            <input type="password" id="password" placeholder="Contraseña" required/>
            {submitted && passwordError && <small style={{ color: 'red' }}>* La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.</small>}
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
