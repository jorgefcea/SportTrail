import "./rightBar.scss";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Recomendaciones para tí</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <span>Jorge Fernández</span>
                        </div>
                        <div className="buttons">
                            <button>Seguir</button>
                            <button>Descartar</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <span>Jorge Fernández</span>
                        </div>
                        <div className="buttons">
                            <button>Seguir</button>
                            <button>Descartar</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Últimas actividades</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <p>
                                <span>Jorge Fernández</span> ha cambiado su foto de perfil
                            </p>
                        </div>
                        <span>hace 1 minuto</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <p>
                                <span>Jorge Fernández</span> ha dado ❤️ a publicación
                            </p>
                        </div>
                        <span>hace 1 minuto</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <p>
                                <span>Jorge Fernández</span> ha dado ❤️ a un comentario
                            </p>
                        </div>
                        <span>hace 1 minuto</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <p>
                                <span>Jorge Fernández</span> ha publicado una ruta
                            </p>
                        </div>
                        <span>hace 1 minuto</span>
                    </div>
                </div>
                <div className="item">
                    <span>Amigos conectados</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <div className="online"/>
                            <span>Jorge Fernández</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <div className="online"/>
                            <span>Jorge Fernández</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <div className="online"/>
                            <span>Jorge Fernández</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <div className="online"/>
                            <span>Jorge Fernández</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="../src/pages/login/images/logo.png" alt="" />
                            <div className="online"/>
                            <span>Jorge Fernández</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar;