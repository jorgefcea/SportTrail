import "./share.scss";
import CollectionsIcon from '@mui/icons-material/Collections';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation({
    mutationKey: "createPost",
    mutationFn: async () => {
      let imgUrl = "";
      if (file) imgUrl = await upload();
      await makeRequest.post("/posts", { desc, img: imgUrl });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      setDesc("");
      setFile(null);
    },
    onError: (error) => {
      console.error("Error al realizar la mutación:", error);
    }
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`¿Qué está pasando ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
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
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
