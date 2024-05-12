import axios from "axios"; // Importar axios para hacer peticiones HTTP al servidor de la API

export const makeRequest = axios.create({ // Crear una instancia de axios para hacer peticiones al servidor de la API
  baseURL: "http://localhost:8800/api/", // Establecer la URL base de la API
  withCredentials: true, // Enviar cookies con las peticiones
});