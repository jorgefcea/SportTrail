import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( // Renderiza la aplicación en el elemento con el ID "root" utilizando React Concurrent Mode y React Strict Mode para mejorar el rendimiento y la calidad del código
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
