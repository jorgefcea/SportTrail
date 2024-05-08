import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false); // Estado para controlar la apertura del modal de compartir

  const { isLoading: likesLoading, error: likesError, data: likesData } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () =>
      makeRequest.get("/likes?postId=" + post.id).then((res) => res.data),
  });

  const { isLoading: commentsLoading, error: commentsError, data: commentsData } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + post.id).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationKey: "toggleLike",
    mutationFn: (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["likes"]);
    },
  });

  const deleteMutation = useMutation({
    mutationKey: "deletePost",
    mutationFn: (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  useEffect(() => {
    queryClient.invalidateQueries(["comments", post.id]);
  }, [post.id, queryClient]);

  const handleLike = () => {
    mutation.mutate(likesData.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  const handleShare = () => {
    setShareModalOpen(!shareModalOpen); // Cambiar el estado de shareModalOpen al hacer clic en Compartir
  };

  const handleShareToSocialMedia = (platform) => { // Función para compartir en redes sociales
    const shareUrl = window.location.href;
    const shareText = post.desc;
  
    switch (platform) { 
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com/", "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, "_blank");
        break;
      case "whatsapp":
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " - " + shareUrl)}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={"/upload/"+post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} style={{cursor: "pointer"}}/>
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}><DeleteIcon/></button>
          )}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"/upload/" + post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {likesLoading ? (
              "loading"
            ) : likesData.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                style={{ color: "limegreen" }}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {likesData?.length} Me gusta
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {commentsLoading ? "Cargando..." : `${commentsData?.length} Comentarios`}
          </div>
          <div className="item" onClick={handleShare}>
            <ShareOutlinedIcon />
            Compartir
          </div>
          {/* Mostrar los iconos de redes sociales si shareModalOpen es verdadero */}
          {shareModalOpen && (
            <div className="social-icons">
              <FacebookTwoToneIcon onClick={() => handleShareToSocialMedia("facebook")} />
              <InstagramIcon onClick={() => handleShareToSocialMedia("instagram")} />
              <XIcon onClick={() => handleShareToSocialMedia("twitter")} />
              <WhatsAppIcon onClick={() => handleShareToSocialMedia("whatsapp")} />
            </div>
          )}
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
