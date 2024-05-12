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
                                    <h3><b>Los Cahorros - Río Monachil</b><br />(Monachil, Granada, España)</h3>
                                    <Link to="/routesLink/Monachil" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/montserrat.png" alt="" />
                                    <h3><b>Cumbre de Sant Jeroni</b><br /><br />(Macizo de Montserrat, Barcelona, España)</h3>
                                    <Link to="/routesLink/Montserrat" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/soller.png" alt="" />
                                    <h3><b>Sóller - Binibassí - Fortnalux - Biniaraix</b><br />(Sóller, Mallorca, España)</h3>
                                    <Link to="/routesLink/Soller" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/tibidabo.png" alt="" />
                                    <h3><b>Montaña del Tibidabo</b><br /><br />(Parc de Collserola, Barcelona, España)</h3>
                                    <Link to="/routesLink/Tibidabo" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/tajo.png" alt="" />
                                    <h3><b>Molinos del Tajo</b><br /><br />(Ronda, Málaga, España)</h3><br />
                                    <Link to="/routesLink/Tajo" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/caminito.png" alt="" />
                                    <h3><b>El Caminito del Rey</b><br /><br />(Ardales, Málaga, España)</h3>
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
                                    <h3><b>Sendero del Agua - Camino Puricelli</b><br />(Cercedilla, Comunidad de Madrid, España)</h3>
                                    <Link to="/routesLink/Senderoagua" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/pla.png" alt="" />
                                    <h3><b>Pla dels Maduixers - Tibidabo - Vallvidrera</b><br />(Parc de Collserola, Barcelona, España)</h3>
                                    <Link to="/routesLink/Pla" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/embalse.png" alt="" />
                                    <h3><b>Embalse de la Concepción</b><br />(Marbella, Málaga, España)</h3>
                                    <Link to="/routesLink/Embalse" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/floresta.png" alt="" />
                                    <h3><b>Baixador de Vallvidrera - La Floresta</b><br />(Parc de Collserola, Barcelona, España)</h3>
                                    <Link to="/routesLink/Floresta" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/turia.png" alt="" />
                                    <h3><b>Parque Fluvial del Río Turia</b><br />(Valencia, Valencia, España)</h3>
                                    <Link to="/routesLink/Turia" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/beas.png" alt="" />
                                    <h3><b>Parque Periurbano Dehesa del Generalife</b><br />(Beas de Granada, Granada, España)</h3>
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
                                    <img src="src/pages/routes/routesImg/manzanares.png" alt="" />
                                    <h3><b>Madrid Río - Río Manzanares</b><br />(Madrid, Comunidad de Madrid, España)</h3>
                                    <Link to="/routesLink/Manzanares" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/retiro.png" alt="" />
                                    <h3><b>Parque del Retiro</b><br /><br />(Madrid, Comunidad de Madrid, España)</h3>
                                    <Link to="/routesLink/Retiro" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/mijas.png" alt="" />
                                    <h3><b>Mijas - Pico Mendoza</b><br /><br />(Mijas, Málaga, España)</h3><br />
                                    <Link to="/routesLink/Mijas" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/cazadores.png" alt="" />
                                    <h3><b>Senda de los Cazadores</b><br />(Parque Nacional de Ordesa y Monte Perdido, Huesca, España)</h3>
                                    <Link to="/routesLink/Cazadores" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/torremolinos.png" alt="" />
                                    <h3><b>Puerto Marina - Punta Torremolinos</b><br />(Benalmádena, Málaga, España)</h3>
                                    <Link to="/routesLink/Torremolinos" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/padul.png" alt="" />
                                    <h3><b>Cerro de la Silleta</b><br /><br />(El Padul, Granada, España)</h3>
                                    <Link to="/routesLink/Padul" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
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
                                    <img src="src/pages/routes/routesImg/bicha.png" alt="" />
                                    <h3><b>Fuente de la Bicha</b><br /><br />(Granada, Granada, España)</h3>
                                    <Link to="/routesLink/Bicha" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/sevilla.png" alt="" />
                                    <h3><b>Tour de Sevilla</b><br /><br />(Sevilla, Sevilla, España)</h3><br />
                                    <Link to="/routesLink/Sevilla" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/alhambra.png" alt="" />
                                    <h3><b>Alhambra y Albaicín</b><br /><br />(Granada, Granada, España)</h3>
                                    <Link to="/routesLink/Alhambra" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/rambla.png" alt="" />
                                    <h3><b>La Rambla</b><br /><br />(Barcelona, Barcelona, España)</h3>
                                    <Link to="/routesLink/Rambla" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/urgul.png" alt="" />
                                    <h3><b>Monte Urgull - Castillo de la Mota</b><br />(San Sebastián, Guipúzcoa, España)</h3>
                                    <Link to="/routesLink/Urgul" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
                                        <button>Ver Ruta</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="categorie">
                                <div className="categorie-1">
                                    <img src="src/pages/routes/routesImg/santiago.png" alt="" />
                                    <h3><b>Santiago de Compostela</b><br />(Santiago de Compostela, La Coruña, España)</h3>
                                    <Link to="/routesLink/Santiago" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
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