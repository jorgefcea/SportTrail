import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import { // Importar las funciones necesarias de react-router-dom
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/rightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Store from "./pages/store/Store";
import Routes from "./pages/routes/Routes";
import Monachil from "./pages/routesLink/Monachil";
import Monserrat from "./pages/routesLink/Monserrat";
import Soller from "./pages/routesLink/Soller";
import Tibidabo from "./pages/routesLink/Tibidabo";
import Tajo from "./pages/routesLink/Tajo";
import Caminito from "./pages/routesLink/Caminito";
import Senderoagua from "./pages/routesLink/Senderoagua";
import Pla from "./pages/routesLink/Pla";
import Embalse from "./pages/routesLink/Embalse";
import Floresta from "./pages/routesLink/Floresta";
import Turia from "./pages/routesLink/Turia";
import Beas from "./pages/routesLink/Beas";
import "./style.scss";
import React, { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext.jsx';
import { AuthContext } from "./context/authContext.jsx";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

function App() {

  const { currentUser } = useContext(AuthContext); // Variable currentUser que indica si el usuario está logueado o no

  const { darkMode } = useContext(DarkModeContext); // Extraer el estado darkMode del contexto DarkModeContext

  const queryClient = new QueryClient;

  const Layout = () => { // Componente Layout que contiene la estructura de la aplicación
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <NavBar/>
          <div style={{display: "flex"}}>
            <LeftBar/>
            <div style={{flex:6}}>
              <Outlet/>
            </div>
            <RightBar/>
          </div>
        </div>
      </QueryClientProvider>
    );
  }

  const ProtectedRoute = ({children}) => { // Componente PrivateRoute que redirige a la página de login si el usuario no está logueado
    if (!currentUser) {
      return <Navigate to="/login"/>
    }
    return children;
  }

  const router = createBrowserRouter([ // Añadir las rutas de la aplicación
    {
      path: "/",
      element: ( // Añadir el componente ProtectedRoute con el componente Layout como hijo
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        },
        {
          path: "/store",
          element: <Store/>,
        },
        {
          path: "/routes",
          element: <Routes/>,
        }, 
        {
          path: "/routesLink/Monachil",
          element: <Monachil/>,
        },
        {
          path: "/routesLink/Montserrat",
          element: <Monserrat/>,
        },
        {
          path: "/routesLink/Soller",
          element: <Soller/>,
        },
        {
          path: "/routesLink/Tibidabo",
          element: <Tibidabo/>,
        },
        {
          path: "/routesLink/Tajo",
          element: <Tajo/>,
        },
        {
          path: "/routesLink/Caminito",
          element: <Caminito/>,
        },
        {
          path: "/routesLink/Senderoagua",
          element: <Senderoagua/>,
        },
        {
          path: "/routesLink/Pla",
          element: <Pla/>,
        },
        {
          path: "/routesLink/Embalse",
          element: <Embalse/>,
        },
        {
          path: "/routesLink/Floresta",
          element: <Floresta/>,
        },
        {
          path: "/routesLink/Turia",
          element: <Turia/>,
        },
        {
          path: "/routesLink/Beas",
          element: <Beas/>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },   
  ]);

  return ( // Añadir el componente RouterProvider con la propiedad router
  <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
