import { createContext, useEffect, useState } from "react"; // Importar las funciones de react
import axios from 'axios'; // Importar axios

export const AuthContext = createContext(); // Crear el contexto AuthContext

export const AuthContextProvider = ({ children }) => { // Crear el componente AuthContextProvider que contiene el estado currentUser y la función login para loguear al usuario
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => { // Crear la función login que envía los datos del usuario al servidor
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  useEffect(() => { // Crear el efecto que almacena los datos del usuario en localStorage
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return ( // Devolver el componente AuthContext.Provider con el valor de currentUser y la función login
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};