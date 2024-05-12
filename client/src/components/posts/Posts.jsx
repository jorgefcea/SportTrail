import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => { // Componente para mostrar las publicaciones de un usuario
  const { isLoading, error, data } = useQuery({ // Consulta para obtener las publicaciones de un usuario
    queryKey: ["posts", userId], 
    queryFn: () =>
      makeRequest.get("/posts?userId=" + userId).then((res) => res.data), // Hacer una petición para obtener las publicaciones
  });

  return (
    <div className="posts">
      {error ? (
        "Something went wrong!"
      ) : isLoading ? (
        "loading"
      ) : (
        data.map((post, index) => <Post post={post} key={`${post.id}-${index}`} />) // Mapear las publicaciones
      )}
    </div>
  );
};

export default Posts;
