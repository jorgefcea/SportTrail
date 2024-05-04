import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "David Fernández",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Sergio Takeli",
      userId: 2,
      profilePic:
        "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
      id: 1,
      name: "David Fernández",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.unsplash.com/photo-1508789454646-bef72439f197?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;