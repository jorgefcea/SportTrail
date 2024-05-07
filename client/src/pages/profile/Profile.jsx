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
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res) => {
        return res.data;
      })
  });
  

  return (
    <div className="profile">
      {isLoading ? "loading" : <><div className="images">
        <img src={data?.coverPic} alt="" className="cover" />
        <img src={data?.profilePic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
        <div className="left">
          <a href="https://facebook.com">
            <FacebookTwoToneIcon className="icon"/>
          </a>
          <a href="https://instagram.com">
            <InstagramIcon className="icon"/>
          </a>
          <a href="https://x.com">
            <XIcon className="icon"/>
          </a>
          <a href="https://linkedin.com">
            <LinkedInIcon className="icon"/>
          </a>
          <a href="https://pinterest.com">
            <PinterestIcon className="icon"/>
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
            {userId === currentUser.id ? (
            <button className="button">Actualizar</button>
            ) : (
            <button className="button">Seguir</button> 
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div></>}
    </div>
  );
};

export default Profile;