import { useState } from "react";
import { makeRequest } from "../../axios";
import "./update.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PublicIcon from '@mui/icons-material/Public';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const Update = ({ setOpenUpdate, user }) => { // Componente para actualizar el perfil de usuario
    const [cover, setCover] = useState(null); // Estado para almacenar la imagen de portada
    const [profile, setProfile] = useState(null); // Estado para almacenar la imagen de perfil

    const [texts, setTexts] = useState({ // Estado para almacenar los datos del usuario
        email: user.email,
        password: user.password,
        name: user.name,
        city: user.city,
        country: user.country,
    });

    const upload = async (file) => { // Función para subir una imagen
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => { // Función para manejar el cambio en los campos de texto
        setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const queryClient = useQueryClient(); // Cliente de queries de React Query

    const mutation = useMutation({ // Mutación para actualizar los datos del usuario
        mutationKey: "updateUser",
        mutationFn: async () => {
            let coverUrl = "";
            let profileUrl = "";
            if (cover) coverUrl = await upload(cover);
            if (profile) profileUrl = await upload(profile);
            await makeRequest.put("/users", { ...texts, coverPic: coverUrl, profilePic: profileUrl });
        },
        onSuccess: () => { // Función que se ejecuta cuando la mutación es exitosa
            queryClient.invalidateQueries(["user"]);
            setCover(null);
            setProfile(null);
        },
        onError: (error) => { // Función que se ejecuta cuando hay un error en la mutación
            console.error("Error al realizar la mutación:", error);
        }
    });

    const handleClick = async (e) => { // Función para manejar el clic en el botón de actualizar
        e.preventDefault();

        try {
            await mutation.mutateAsync(); // Esperar a que la mutación termine
            setOpenUpdate(false);
            window.location.reload(); // Recargar la ventana después de la actualización
        } catch (error) {
            console.error("Error al realizar la actualización:", error);
        }
    };

    return (
        <div className="update">
            <div className="wrapper">
                <h1>¡Actualiza tu perfil!</h1>
                <form>
                    <div className="files">
                        <label htmlFor="cover">
                            <div className="item">
                                <AccountBoxIcon className="icon" />
                                <span>Foto de Perfil</span>
                            </div>
                            <div className="imgContainer">
                                <img
                                    src={cover ? URL.createObjectURL(cover) : user.coverPic}
                                    alt=""
                                />
                                <CloudUploadIcon className="icon2" />
                            </div>
                        </label>
                        <input
                            type="file"
                            id="cover"
                            style={{ display: "none" }}
                            onChange={(e) => setCover(e.target.files[0])}
                        />
                        <label htmlFor="profile">
                            <div className="item">
                                <ContactEmergencyIcon className="icon" />
                                <span>Foto de Portada</span>
                            </div>
                            <div className="imgContainer">
                                <img
                                    src={profile ? URL.createObjectURL(profile) : user.profilePic}
                                    alt=""
                                />
                                <CloudUploadIcon className="icon1" />
                            </div>
                        </label>
                        <input
                            type="file"
                            id="profile"
                            style={{ display: "none" }}
                            onChange={(e) => setProfile(e.target.files[0])}
                        />
                    </div>
                    <div className="item">
                        <EmailIcon className="icon" />
                        <label>Correo Electrónico</label>
                    </div>
                    <input
                        type="text"
                        value={texts.email}
                        name="email"
                        onChange={handleChange}
                    />
                    <div className="item">
                        <PasswordIcon className="icon" />
                        <label>Contraseña</label>
                    </div>
                    <input
                        type="text"
                        value={texts.password}
                        name="password"
                        onChange={handleChange}
                    />
                    <div className="item">
                        <DriveFileRenameOutlineIcon className="icon" />
                        <label>Nombre</label>
                    </div>
                    <input
                        type="text"
                        value={texts.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <div className="item">
                        <LocationCityIcon className="icon" />
                        <label>Ciudad</label>
                    </div>
                    <input
                        type="text"
                        name="city"
                        value={texts.city}
                        onChange={handleChange}
                    />
                    <div className="item">
                        <PublicIcon className="icon" />
                        <label>País</label>
                    </div>
                    <input
                        type="text"
                        name="country"
                        value={texts.country}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Actualizar</button>
                </form>
                <button className="close" onClick={() => setOpenUpdate(false)}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Update;