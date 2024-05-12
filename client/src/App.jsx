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
import Montserrat from "./pages/routesLink/Montserrat";
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
import Manzanares from "./pages/routesLink/Manzanares";
import Retiro from "./pages/routesLink/Retiro";
import Mijas from "./pages/routesLink/Mijas";
import Cazadores from "./pages/routesLink/Cazadores";
import Torremolinos from "./pages/routesLink/Torremolinos";
import Padul from "./pages/routesLink/Padul";
import Bicha from "./pages/routesLink/Bicha";
import Sevilla from "./pages/routesLink/Sevilla";
import Alhambra from "./pages/routesLink/Alhambra";
import Rambla from "./pages/routesLink/Rambla";
import Urgul from "./pages/routesLink/Urgul";
import Santiago from "./pages/routesLink/Santiago";
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
          element: <Montserrat/>,
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
        {
          path: "/routesLink/Manzanares",
          element: <Manzanares/>,
        },
        {
          path: "/routesLink/Retiro",
          element: <Retiro/>,
        },
        {
          path: "/routesLink/Mijas",
          element: <Mijas/>,
        },
        {
          path: "/routesLink/Cazadores",
          element: <Cazadores/>,
        },
        {
          path: "/routesLink/Torremolinos",
          element: <Torremolinos/>,
        },
        {
          path: "/routesLink/Padul",
          element: <Padul/>,
        },
        {
          path: "/routesLink/Bicha",
          element: <Bicha/>,
        },
        {
          path: "/routesLink/Sevilla",
          element: <Sevilla/>,
        },
        {
          path: "/routesLink/Alhambra",
          element: <Alhambra/>,
        },
        {
          path: "/routesLink/Rambla",
          element: <Rambla/>,
        },
        {
          path: "/routesLink/Urgul",
          element: <Urgul/>,
        },
        {
          path: "/routesLink/Santiago",
          element: <Santiago/>,
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
