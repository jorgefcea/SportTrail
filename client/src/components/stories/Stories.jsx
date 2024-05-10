import { useContext, useState, useEffect } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios"; // Importa makeRequest desde tu archivo de axios

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        // Hacer la solicitud para obtener la información de los usuarios
        const response = await makeRequest.get("/stories");
        const users = response.data.filter(user => user.id !== currentUser.id); // Filtrar el usuario actual
        setOtherUsers(users);
      } catch (error) {
        console.error("Error fetching other users:", error);
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
