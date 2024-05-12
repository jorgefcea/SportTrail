import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapIcon from '@mui/icons-material/Map';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";

const NavBar = () => { // Componente para mostrar la barra de navegación
    const { toggle, darkMode } = useContext(DarkModeContext); // Importa el estado y la función para cambiar el modo oscuro
    const { currentUser, logout } = useContext(AuthContext); // Importa logout del contexto
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar si se está cargando la información
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

    const fetchUserData = async () => { // Función para obtener los datos del usuario
        try {
            const response = await makeRequest.get(`/users/find/${currentUser.id}`);
            setUserData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => { // Obtener los datos del usuario al cargar el componente
        fetchUserData();
    }, [currentUser.id]);

    const handleLogout = async () => { // Define la función handleLogout para manejar el logout
        try {
            console.log("Logging out...");
            await logout(); // Llama a la función logout del contexto de autenticación
            console.log("Logout successful");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const handleLinkClick = () => { // Función para recargar la página al hacer clic en un enlace
        setTimeout(() => {
          window.scrollTo(0, 0);
          window.location.reload();
        }, 1);
      };

    return (
        <div className="navBar">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="left">
                        <Link to="/" style={{textDecoration: "none"}} onClick={handleLinkClick}>
                            <img src="../src/pages/login/images/logo.png" alt="" />
                        </Link>
                        <Link to="/" style={{textDecoration: "none", color: "inherit" }} className="homesito" onClick={handleLinkClick}>
                            <HomeOutlinedIcon/>
                        </Link>
                        <Link to="/routes" style={{textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                            <MapIcon/>
                        </Link>
                        <Link to="/store" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                <ShoppingBagOutlinedIcon/>
                            </Link>
                        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} style={{cursor: "pointer"}}/> : <DarkModeOutlinedIcon onClick={toggle} style={{cursor: "pointer"}}/> }
                        <GridViewOutlinedIcon className="cuadritos"/>
                        <div className="search">
                            <SearchOutlinedIcon/>
                            <input type="text" placeholder="Buscar..."/>
                        </div>
                        <Link to={`/profile/${currentUser.id}`} style={{textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                            <PersonOutlinedIcon className="perfilsito"/>
                        </Link>
                        <div className="logout" onClick={handleLogout} style={{cursor: "pointer"}}> {/* Maneja el clic para cerrar sesión */}
                            <CancelIcon className="logoutsito"/>
                        </div>
                    </div>
                    <div className="right">
                        <Link to={`/profile/${currentUser.id}`} style={{textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                            <PersonOutlinedIcon/>
                        </Link>
                        <EmailOutlinedIcon/>
                        <NotificationsOutlinedIcon/>
                        <Link to={`/profile/${currentUser.id}`} style={{textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                            <div className="user">
                                {userData && userData.profilePic && (
                                    <img src={"/upload/"+ userData.profilePic} alt="Profile" />
                                )}
                                {userData && userData.name && (
                                    <span>{userData.name}</span>
                                )}
                            </div>
                        </Link>
                        <div className="logout" onClick={handleLogout} style={{cursor: "pointer"}}> {/* Maneja el clic para cerrar sesión */}
                            <CancelIcon/>
                            <span>Cerrar Sesión</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default NavBar;
