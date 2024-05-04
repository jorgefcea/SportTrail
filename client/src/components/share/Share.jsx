import "./share.scss";
import CollectionsIcon from '@mui/icons-material/Collections';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`¿Qué está pasando ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <CollectionsIcon className="icon"/>
                <span>Añadir Imagen</span>
              </div>
            </label>
            <div className="item">
              <AddLocationAltIcon className="icon"/>
              <span>Añadir Lugar</span>
            </div>
            <div className="item">
              <PeopleAltIcon className="icon"/>
              <span>Mencionar amigos</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;