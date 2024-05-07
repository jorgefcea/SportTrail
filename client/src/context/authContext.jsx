import { createContext, useEffect, useState } from "react"; // Importar las funciones de react
import axios from 'axios'; // Importar axios

export const AuthContext = createContext(); // Crear el contexto AuthContext

export const AuthContextProvider = ({ children }) => { // Crear el componente AuthContextProvider que contiene el estado currentUser y las funciones login y logout
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => { // Crear la función login que envía los datos del usuario al servidor
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
  };

  const logout = async () => { // Crear la función logout que elimina los datos de usuario y realiza la desconexión en el servidor
    await axios.post("http://localhost:8800/api/auth/logout", null, {
      withCredentials: true,
    });
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => { // Crear el efecto que almacena los datos del usuario en localStorage
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return ( // Devolver el componente AuthContext.Provider con los valores de currentUser, login y logout
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
