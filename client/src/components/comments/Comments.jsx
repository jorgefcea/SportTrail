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

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const queryClient = useQueryClient();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationKey: "addComment",
    mutationFn: (newComment) => makeRequest.post("/comments", newComment),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  const deleteMutation = useMutation({
    mutationKey: "deleteComment",
    mutationFn: (commentId) => makeRequest.delete(`/comments/${commentId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  const fetchUserData = async () => {
    try {
      const response = await makeRequest.get(`/users/find/${currentUser.id}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (desc.trim() !== "") { // Verifica que el comentario no esté vacío
      mutation.mutate({ desc, postId });
      setDesc("");
    }
  };

  const handleDeleteComment = (commentId) => {
    deleteMutation.mutate(commentId);
  };

  const handleLinkClick = () => {
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
