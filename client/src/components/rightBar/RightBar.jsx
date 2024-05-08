import { useState, useContext } from "react";
import { makeRequest } from "../../axios";
import "./rightBar.scss";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom"; // Importar el componente Link

const RightBar = () => {
    const { currentUser } = useContext(AuthContext); // Obtener el usuario actual del contexto de autenticación
    const userId = currentUser.id; // Obtener el ID del usuario actual

    const { isLoading, error, data: recommendations } = useQuery({
        queryKey: ["recommendations", userId], // Incluir el ID del usuario actual en la clave de la consulta
        queryFn: async () => {
            const response = await makeRequest.get(`/recommendations?userId=${userId}`);
            return response.data;
        }
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: "followUser",
        mutationFn: async (followedUserId) => {
            // Realizar la solicitud para seguir o dejar de seguir al usuario
            await makeRequest.post("/relationships", { userId: followedUserId });
            // Invalidar la consulta para que se vuelva a cargar y se actualice la lista de recomendaciones
            queryClient.invalidateQueries(["recommendations", userId]);
        },
    });

    const handleFollow = (followedUserId) => {
        // Llamar a la mutación para seguir o dejar de seguir al usuario
        mutation.mutate(followedUserId);
    };

    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Recomendaciones para ti</span>
                    {isLoading ? (
                        "Cargando..."
                    ) : error ? (
                        "Error al cargar las recomendaciones"
                    ) : recommendations && recommendations.length > 0 ? (
                        recommendations.map((recommendation) => (
                            <div className="user" key={recommendation.id}>
                                <div className="userInfo">
                                    <img src={`/upload/${recommendation.profilePic}`} alt="" />
                                    {/* Utilizar Link para redirigir al perfil del usuario */}
                                    <Link to={`/profile/${recommendation.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                        <span>{recommendation.name}</span>
                                    </Link>
                                </div>
                                <div className="buttons">
                                    <button onClick={() => handleFollow(recommendation.id)}>Seguir</button>
                                    <button>Descartar</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="user">
                            <div className="userInfo">
                                <span>No hay recomendaciones en este momento.</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* Aquí están los otros elementos */}
                <div className="item">
                    <span>Últimas actividades</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/pages/login/images/logo.png" alt="" />
                            <p>
                                <span>Jorge Fernández</span> ha cambiado su foto de perfil
                            </p>
                        </div>
                        <span>hace 1 minuto</span>
                    </div>
                    {/* Agrega aquí más elementos de las últimas actividades si es necesario */}
                </div>
                <div className="item">
                    <span>Amigos conectados</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/src/pages/login/images/logo.png" alt="" />
                            <div className="online" />
                            <span>Jorge Fernández</span>
                        </div>
                    </div>
                    {/* Agrega aquí más elementos de amigos conectados si es necesario */}
                </div>
            </div>
        </div>
    );
};

export default RightBar;
