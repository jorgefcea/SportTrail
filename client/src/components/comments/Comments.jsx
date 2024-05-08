import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: "addComment",
    mutationFn: (newComment) => makeRequest.post("/comments", newComment),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["comments"]);
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
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={userData && userData.profilePic ? "/upload/" + userData.profilePic : ""} alt="Profile" />
        <input
          type="text"
          placeholder="Publica un comentario"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error ? (
        "Something went wrong"
      ) : isLoading ? (
        "loading"
      ) : (
        data.map((comment) => (
          <div className="comment" key={comment.id}>
            <img src={comment.profilePic ? "/upload/" + comment.profilePic : ""} alt="Profile" />
            <div className="info">
              <Link
                to={`/profile/${comment.userId}`} 
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{comment.name}</span>
              </Link>
              <p>{comment.desc}</p>
            </div>
            <span className="date">
              {moment(comment.createdAt).fromNow()}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
