import { createContext, useEffect, useState } from "react"; // Importar las funciones de react

export const AuthContext = createContext(); // Crear el contexto AuthContext

export const AuthContextProvider = ({ children }) => { // Crear el componente AuthContextProvider que contiene el estado currentUser y la función login para loguear al usuario
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => { // Crear la función login que loguea al usuario y almacena sus datos en localStorage
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Jorge Fernández",
      profilePic:
        "../src/pages/login/images/senderismo.avif",
    });
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