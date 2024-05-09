import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "David Fernández",
      img: "/upload/1715119677934david.jpg",
    },
    {
      id: 2,
      name: "Jorge Fernández",
      img: "/upload/1715119730810jorge.jpg",
    },
    {
      id: 3,
      name: "Rubén de la Blanca",
      img: "/upload/1715119826386ruben.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src="/upload/1715119575881takeli.jpg" alt="" />
          <span>Sergio Takeli</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories