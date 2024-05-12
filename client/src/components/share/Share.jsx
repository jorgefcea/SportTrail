import "./share.scss";
import CollectionsIcon from '@mui/icons-material/Collections';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => { // Componente para compartir una publicación
  const [file, setFile] = useState(null); // Estado para almacenar el archivo de imagen
  const [desc, setDesc] = useState(""); // Estado para almacenar la descripción de la publicación
  const { currentUser } = useContext(AuthContext); // Obtener el usuario actual del contexto de autenticación
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si se está cargando 
  const queryClient = useQueryClient(); // Cliente de queries de React Query

  const upload = async () => { // Función para subir una imagen
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserData = async () => { // Función para obtener los datos del usuario
    try {
      const response = await makeRequest.get(`/users/find/${currentUser.id}`);
      setUserData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al recuperar los datos del usuario:", error);
      setIsLoading(false);
    }
  };

  const mutation = useMutation({ // Mutación para crear una publicación
    mutationKey: "createPost",
    mutationFn: async () => {
      let imgUrl = "";
      if (file) imgUrl = await upload();
      await makeRequest.post("/posts", { desc, img: imgUrl });
    },
    onSuccess: () => { // Función que se ejecuta cuando la mutación es exitosa
      queryClient.invalidateQueries(["posts"]);
      setDesc("");
      setFile(null);
    },
    onError: (error) => { // Función que se ejecuta cuando hay un error en la mutación
      console.error("Error al realizar la mutación:", error);
    }
  });

  const handleClick = () => { // Función para manejar el clic en el botón de publicar
    if (desc.trim() !== "") { // Verifica que el campo de descripción no esté vacío
      mutation.mutate();
    }
  };

  useEffect(() => { // Obtener los datos del usuario al cargar el componente
    fetchUserData(); 
  }, [currentUser.id]);

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={userData && "/upload/"+ userData.profilePic} alt="" />
            <input
              type="text"
              placeholder={`¿Qué está pasando ${userData && userData.name}?`}
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
            <button disabled={!desc.trim()} onClick={handleClick}>Publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
