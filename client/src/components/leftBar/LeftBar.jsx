import "./leftBar.scss";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import CollectionsIcon from '@mui/icons-material/Collections';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SchoolIcon from '@mui/icons-material/School';
import SavingsIcon from '@mui/icons-material/Savings';
import { makeRequest } from "../../axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        try {
            const response = await makeRequest.get(`/users/find/${currentUser.id}`);
            setUserData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="leftBar">
            <div className="container">
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className="menu">
                            <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="user">
                                    <img src={"/upload/"+ userData.profilePic} alt="Profile" />
                                    <span>{userData.name}</span>
                                </div>
                            </Link>
                            <div className="item">
                                <PeopleAltIcon className="icon" />
                                <span>Amigos</span>
                            </div>
                            <div className="item">
                                <GroupsIcon className="icon" />
                                <span>Grupos</span>
                            </div>
                            <div className="item">
                                <ShoppingBagIcon className="icon" />
                                <span>Tienda</span>
                            </div>
                            <div className="item">
                                <VideoLibraryIcon className="icon" />
                                <span>Ver</span>
                            </div>
                            <div className="item">
                                <RestoreIcon className="icon" />
                                <span>Recuerdos</span>
                            </div>
                        </div>
                        <hr />
                        <div className="menu">
                            <span>Favoritos</span>
                            <div className="item">
                                <CalendarMonthIcon className="icon" />
                                <span>Eventos</span>
                            </div>
                            <div className="item">
                                <PedalBikeIcon className="icon" />
                                <span>Juegos</span>
                            </div>
                            <div className="item">
                                <CollectionsIcon className="icon" />
                                <span>Galería</span>
                            </div>
                            <div className="item">
                                <SmartDisplayIcon className="icon" />
                                <span>Vídeos</span>
                            </div>
                            <div className="item">
                                <MarkunreadIcon className="icon" />
                                <span>Mensajes</span>
                            </div>
                        </div>
                        <hr />
                        <div className="menu">
                            <span>Otros</span>
                            <div className="item">
                                <SavingsIcon className="icon" />
                                <span>Fondos</span>
                            </div>
                            <div className="item">
                                <VideoCameraFrontIcon className="icon" />
                                <span>Tutoriales</span>
                            </div>
                            <div className="item">
                                <SchoolIcon className="icon" />
                                <span>Cursos</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LeftBar;
