import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  // TEMPORARY
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Rubén de la Blanca",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1536164261511-3a17e671d380?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "David Takeli",
      userId: 2,
      profilePicture:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Publica un comentario" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">hace 1 hora</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
