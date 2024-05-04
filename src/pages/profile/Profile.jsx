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
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="cover" />
        <img src="../src/pages/login/images/senderismo.avif" alt="" className="profilePic" />
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
            <span className="perfilName">Jorge Fernández Cea</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Granada</span>
              </div>
              <div className="item">
                <PublicIcon />
                <span>España</span>
              </div>
            </div>
            <button className="button">Seguir</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;