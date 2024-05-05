import React, { useState } from 'react';
import "./login.scss";
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
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
          <form>
            <input type="text" placeholder="Nombre de usuario" name="username" required onChange={handleChange}/>
            <input type="password" id="password" placeholder="Contraseña" name="password" required onChange={handleChange}/>
            {err && <small style={{ color: 'red' }}>{err}</small>}
            <button onClick={handleLogin}>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
