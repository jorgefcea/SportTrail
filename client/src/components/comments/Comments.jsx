import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";

const Comments = ({ postId }) => { // Componente para mostrar los comentarios de una publicación
  const [desc, setDesc] = useState(""); // Estado para almacenar el contenido del comentario
  const { currentUser } = useContext(AuthContext); // Obtener el usuario actual
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario
  const queryClient = useQueryClient(); // Cliente de queries de React Query
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const { isLoading, error, data } = useQuery({ // Consulta para obtener los comentarios de una publicación
    queryKey: ["comments", postId],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
  });

  const mutation = useMutation({ // Mutación para añadir un comentario
    mutationKey: "addComment",
    mutationFn: (newComment) => makeRequest.post("/comments", newComment),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  const deleteMutation = useMutation({ // Mutación para eliminar un comentario
    mutationKey: "deleteComment",
    mutationFn: (commentId) => makeRequest.delete(`/comments/${commentId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  const fetchUserData = async () => { // Función para obtener los datos del usuario
    try {
      const response = await makeRequest.get(`/users/find/${currentUser.id}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => { // Obtener los datos del usuario al cargar el componente
    fetchUserData();
  }, []);

  const handleClick = async (e) => { // Función para añadir un comentario
    e.preventDefault();
    if (desc.trim() !== "") { // Verifica que el comentario no esté vacío
      mutation.mutate({ desc, postId });
      setDesc("");
    }
  };

  const handleDeleteComment = (commentId) => { // Función para eliminar un comentario
    deleteMutation.mutate(commentId);
  };

  const handleLinkClick = () => { // Función para recargar la página al hacer clic en un enlace
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.reload();
    }, 1);
  };

  return (
    <div className="comments">
      <div className="write">
        <img
          src={
            userData && userData.profilePic
              ? "/upload/" + userData.profilePic
              : ""
          }
          alt="Profile"
        />
        <input
          type="text"
          placeholder="Publica un comentario"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button disabled={!desc.trim()} onClick={handleClick}>Enviar</button>
      </div>
      {error ? (
        "Algo salió mal"
      ) : isLoading ? (
        "Cargando..."
      ) : (
        data.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="user-info">
              <img
                src={
                  comment.profilePic
                    ? "/upload/" + comment.profilePic
                    : ""
                }
                alt="Profile"
              />
              <Link
                to={`/profile/${comment.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleLinkClick}
              >
                <span>{comment.name}</span>
              </Link>
              {currentUser.id === comment.userId && (
                <div className="more-icon-container">
                  {menuOpen && (
                    <div className="comment-menu">
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  )}
                  <MoreHorizIcon
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
            </div>
            <div className="comment-content">
              <p>{comment.desc}</p>
              <div className="comment-meta">
                <span className="date">
                  {moment(comment.createdAt).fromNow()}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
