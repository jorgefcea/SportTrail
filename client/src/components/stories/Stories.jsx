import { useContext, useState, useEffect } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios"; // Importa makeRequest desde tu archivo de axios

const Stories = () => { // Componente para mostrar las historias de los usuarios
  const { currentUser } = useContext(AuthContext); // Obtener el usuario actual del contexto de autenticación
  const [otherUsers, setOtherUsers] = useState([]); // Estado para almacenar los datos de los otros usuarios

  useEffect(() => { // Obtener los datos de los otros usuarios al cargar el componente
    const fetchOtherUsers = async () => {
      try {
        // Hacer la solicitud para obtener la información de los usuarios
        const response = await makeRequest.get("/stories");
        const users = response.data.filter(user => user.id !== currentUser.id); // Filtrar el usuario actual
        setOtherUsers(users);
      } catch (error) {
        console.error("Error al recuperar los datos del usuario:", error);
      }
    };

    fetchOtherUsers();
  }, [currentUser.id]);

  return (
    <div className="stories">
      <div className="story">
        <img src={`/upload/${currentUser.profilePic}`} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {otherUsers.map(user => (
        <div className="story" key={user.id}>
          <img src={`/upload/${user.profilePic}`} alt="" />
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
