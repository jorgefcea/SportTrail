import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "David Fernández",
      img: "https://plus.unsplash.com/premium_photo-1684096758573-cd4acd2a12c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJpY2ljbGV0YSUyMG1vbnRhJUMzJUIxYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Sergio Takeli",
      img: "https://images.unsplash.com/photo-1594942939559-cd320140a8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJpY2ljbGV0YSUyMG1vbnRhJUMzJUIxYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Rubén de la Blanca",
      img: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlbmRlcmlzbW98ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "David Takeli",
      img: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VuZGVyaXNtb3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
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