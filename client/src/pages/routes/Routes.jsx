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
                                    <h3>Los Cahorros - Río Monachil<br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink/Monachil" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/montserrat.png" alt="" />
                                    <h3>Cumbre de Sant Jeroni<br />(Montaña de Montserrat, Barcelona, España)</h3>
                                    <Link to="/routesLink/Montserrat" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/soller.png" alt="" />
                                    <h3>Sóller - Binibassí - Fortnalux - Biniaraix<br />(Sóller, Mallorca, España)</h3>
                                    <Link to="/routesLink/Soller" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/tibidabo.png" alt="" />
                                    <h3>Montaña del Tibidabo<br />(Parc de Collserola, Barcelona, España)</h3>
                                    <Link to="/routesLink/Tibidabo" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/tajo.png" alt="" />
                                    <h3>Molinos del Tajo<br />(Ronda, Málaga, España)</h3>
                                    <Link to="/routesLink/Tajo" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/caminito.png" alt="" />
                                    <h3>El Caminito del Rey<br />(Ardales, Málaga, España)</h3>
                                    <Link to="/routesLink/Caminito" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
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
                                    <img src="src/pages/routes/routesImg/senderoagua.png" alt="" />
                                    <h3>Sendero del Agua - Camino Puricelli<br />(Cercedilla, Comunidad de Madrid, España)</h3>
                                    <Link to="/routesLink/Senderoagua" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/pla.png" alt="" />
                                    <h3>Pla dels Maduixers - Tibidabo - Vallvidrera<br />(Parc de Collserola, Barcelona, España)</h3>
                                    <Link to="/routesLink/Pla" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/embalse.png" alt="" />
                                    <h3>Embalse de la Concepción<br />(Marbella, Málaga, España)</h3>
                                    <Link to="/routesLink/Embalse" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/floresta.png" alt="" />
                                    <h3>Baixador de Vallvidrera - La Floresta<br />(Parc de Collserola, Barcelona, España)</h3>
                                    <Link to="/routesLink/Floresta" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/turia.png" alt="" />
                                    <h3>Parque Fluvial del Río Turia<br />(Valencia, Valencia, España)</h3>
                                    <Link to="/routesLink/Turia" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/beas.png" alt="" />
                                    <h3>Parque Periurbano Dehesa del Generalife<br />(Beas de Granada, Granada, España)</h3>
                                    <Link to="/routesLink/Beas" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
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
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
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
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
                                    <h3>Los Cahorros - Río Monachil <br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/" alt="" />
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