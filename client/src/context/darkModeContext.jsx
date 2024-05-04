import { createContext, useEffect, useState } from "react"; // Importar las funciones de react

export const DarkModeContext = createContext(); // Crear el contexto DarkModeContext

export const DarkModeContextProvider = ({ children }) => { // Crear el componente DarkModeContextProvider que contiene el estado darkMode y la función toggle para cambiar el estado de darkMode
  const [darkMode, setDarkMode] = useState( // Crear el estado darkMode con el valor almacenado en localStorage o false si no existe
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => { // Crear la función toggle que cambia el estado de darkMode y lo almacena en localStorage
    setDarkMode(!darkMode);
  };

  useEffect(() => { // Crear el efecto que almacena el estado de darkMode en localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return ( // Devolver el componente DarkModeContext.Provider con el valor de darkMode y la función toggle
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};