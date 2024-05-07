import { useState } from "react";
import { makeRequest } from "../../axios";
import "./update.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PublicIcon from '@mui/icons-material/Public';

const Update = ({ setOpenUpdate, user }) => {
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(null);

    const [texts, setTexts] = useState({
        email: user.email,
        password: user.password,
        name: user.name,
        city: user.city,
        country: user.country,
    });

    const upload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: "updateUser",
        mutationFn: async () => {
            let coverUrl = "";
            let profileUrl = "";
            if (cover) coverUrl = await upload(cover);
            if (profile) profileUrl = await upload(profile);
            await makeRequest.put("/users", { ...texts, coverPic: coverUrl, profilePic: profileUrl });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
            setCover(null);
            setProfile(null);
        },
        onError: (error) => {
            console.error("Error al realizar la mutación:", error);
        }
    });

    const handleClick = async (e) => {
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
                                <PublicIcon className="icon" />
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
                                <PublicIcon className="icon" />
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
                        <PublicIcon className="icon" />
                        <label>Correo Electrónico</label>
                    </div>
                    <input
                        type="text"
                        value={texts.email}
                        name="email"
                        onChange={handleChange}
                    />
                    <div className="item">
                        <PublicIcon className="icon" />
                        <label>Contraseña</label>
                    </div>
                    <input
                        type="text"
                        value={texts.password}
                        name="password"
                        onChange={handleChange}
                    />
                    <div className="item">
                        <PublicIcon className="icon" />
                        <label>Nombre</label>
                    </div>
                    <input
                        type="text"
                        value={texts.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <div className="item">
                        <PublicIcon className="icon" />
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