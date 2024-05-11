import "./routes.scss";
import { Link } from "react-router-dom";

const Routes = () => {

    const handleLinkClick = () => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          window.location.reload();
        }, 1);
      };

    
    return (
        <div className="routes">
            <div className="routesContainer">
                <div className="routesInfo">
                    <img src="../src/pages/login/images/routes.png" alt="" className="routesLogo"/>
                    <div className="routesLeft">
                        <a href="#lista-1">Senderismo</a> /
                        <a href="#lista-2">Mountain Bike</a> /
                        <a href="#lista-3">Running</a> /
                        <a href="#lista-4">Paseo</a>
                    </div>
                </div>

                <div className="routesInfo2">
                    <section className="promos container" id="lista-1">
                        <h2>Senderismo</h2>
                        <hr />
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr id="lista-2"/>
                    
                    <section className="promos container">
                        <h2>Mountain Bike</h2>
                        <hr />
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr id="lista-3"/>

                    <section className="promos container">
                        <h2>Running</h2>
                        <hr />
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr id="lista-4"/>

                    <section className="promos container">
                        <h2>Paseo</h2>
                        <hr />
                        <div className="categories">
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cahorros.jpg" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Routes;