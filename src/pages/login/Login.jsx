import "./login.scss";
import logo from './images/logo.png';

const Login = () => {
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
          <button>Registrarse</button>
        </div>
        <div className="right">
          <h1>¡Bienvenido de nuevo!</h1>
          <form>
            <input type="text" placeholder="Nombre de Usuario"></input>
            <input type="password" placeholder="Contraseña"></input>
            <button>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;