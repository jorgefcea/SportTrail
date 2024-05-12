import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from '@mui/icons-material/X';
import PlaceIcon from "@mui/icons-material/Place";
import PublicIcon from '@mui/icons-material/Public';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";

const Profile = () => { // Componente para mostrar el perfil de un usuario
  const [openUpdate, setOpenUpdate] = useState(false); // Estado para controlar si el modal de actualización está abierto o cerrado
  const { currentUser } = useContext(AuthContext); // Obtener el usuario actual del contexto de autenticación
  const userId = parseInt(useLocation().pathname.split("/")[2]); // Obtener el ID del usuario de la URL

  const { isLoading, error, data } = useQuery({ // Consulta para obtener los datos del usuario
    queryKey: ["user"],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res) => res.data)
  });

  const { isLoading: rIsLoading, data: relationshipData } = useQuery({ // Consulta para obtener la relación entre el usuario actual y el usuario del perfil
    queryKey: ["relationship"],
    queryFn: () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => res.data)
  });

  const queryClient = useQueryClient(); // Cliente de queries de React Query

  const mutation = useMutation({ // Mutación para seguir o dejar de seguir a un usuario
    mutationKey: "toggleRelationship",
    mutationFn: (following) => {
      if (following) return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["relationship"]);
    },
  });

  const handleFollow = () => { // Función para seguir o dejar de seguir a un usuario
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  useEffect(() => { // Recargar la página al hacer clic en el botón de retroceso
    const handlePopstate = () => {
      setTimeout(() => {
        window.location.reload();
      }, 1);
    };

    window.addEventListener("popstate", handlePopstate); // Agregar un evento para manejar el clic en el botón de retroceso

    return () => {
      window.removeEventListener("popstate", handlePopstate); // Eliminar el evento al desmontar el componente
    };
  }, []);

  return (
    <div className="profile">
      {isLoading ? (
        "Cargando..."
      ) : (
        <>
          <div className="images">
            <img src={"/upload/" + data.coverPic} alt="" className="cover" />
            <img src={"/upload/" + data.profilePic} alt="" className="profilePic" />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="https://facebook.com">
                  <FacebookTwoToneIcon className="icon" />
                </a>
                <a href="https://instagram.com">
                  <InstagramIcon className="icon" />
                </a>
                <a href="https://x.com">
                  <XIcon className="icon" />
                </a>
                <a href="https://linkedin.com">
                  <LinkedInIcon className="icon" />
                </a>
                <a href="https://pinterest.com">
                  <PinterestIcon className="icon" />
                </a>
              </div>
              <div className="center">
                <span className="perfilName">{data?.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data?.city}</span>
                  </div>
                  <div className="item">
                    <PublicIcon />
                    <span>{data?.country}</span>
                  </div>
                </div>
                {rIsLoading ? (
                  "Cargando..."
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)} className="button">Actualizar</button>
                ) : (
                  <button onClick={handleFollow} className="button">
                    {relationshipData.includes(currentUser.id)
                      ? "Siguiendo"
                      : "Seguir"}
                  </button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
