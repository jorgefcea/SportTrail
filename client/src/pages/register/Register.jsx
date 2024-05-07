import React, { useState } from 'react';
import "./register.scss";
import logo from '../login/images/logo.png';
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false); // Variable de estado para controlar la redirección

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const confirmPassword = event.target.confirmPassword.value;
    const password = event.target.password.value;
    if (confirmPassword !== password) {
      setPasswordError(true);
    } else {
      try {
        await axios.post("http://localhost:8800/api/auth/register", inputs); 
        setRedirectToLogin(true); // Establecer redirectToLogin a true después de un registro exitoso
      } catch (err) {
        setErr(err.response.data);
      }
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    const password = event.target.form.password.value;
    setPasswordError(confirmPassword !== password);
  };

  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (redirectToLogin) {
    // Redirigir al usuario a la página de inicio de sesión después de un registro exitoso
    window.location.href = "/login";
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <img src={logo} alt="Logo SportTrail" />
          <p>
            ¡Bienvenid@ a nuestra comunidad! 
            Sumérgete en la exploración de emocionantes rutas y 
            conecta con otros entusiastas del deporte que te apasiona. ¡Estamos 
            emocionados de ser parte de tu próxima gran experiencia!
          </p>
          <span>¿Ya tienes una cuenta?</span>
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
        </div>
        <div className="right">
          <h1>¡Regístrate!</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre completo" name="name" onChange={handleChange} required />
            <input type="text" placeholder="Nombre de usuario" name="username" onChange={handleChange} required />
            <input type="email" placeholder="Correo electrónico" name="email" onChange={handleChange} required />
            <input type="password" id="password" placeholder="Contraseña" 
                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password" onChange={handleChange} required />
            <small>* La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.</small>
            <input type="password" id="confirmPassword" placeholder="Confirmar contraseña" 
                   onChange={handleConfirmPasswordChange} name="confirmPassword" required />
            {submitted && passwordError && <small style={{ color: 'red' }}>Las contraseñas no coinciden.</small>}
            {err && <small style={{ color: 'red' }}>{err}</small>}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
