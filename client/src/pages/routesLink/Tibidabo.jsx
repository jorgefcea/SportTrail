import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Tibidabo = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/tibidabo.gpx", {
      async: true
    }).on("loaded", function(e) {
      map.fitBounds(e.target.getBounds());

      // Extrae las altitudes
      const altitudes = e.target.get_elevation_data();

      // Crea el gráfico de altitud
      const ctx = document.getElementById("altitudeChart").getContext("2d");
      const altitudeChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: altitudes.map((point, index) => index), // Usar números como etiquetas para puntos
          datasets: [
            {
              label: "Altitud",
              data: altitudes.map(point => point[1]),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: false,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }).addTo(map);

    // Cleanup function to remove the Leaflet map on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (

    <div className="routes">
            <div className="routesContainer">
                <div className="routesInfo">
                  <h1>Montaña del Tibidabo<br />
                    <span>(Parc de Collserola, Barcelona, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/tibidabo.png" alt="" />
                </div>
                <div className="routesInfo2">
                <section className="promos container" id="lista-1">
                  <h1>Recorrido y Altitud de la Ruta</h1>
                  <hr />
                  <table className="route-info">
                    <tbody>
                      <tr>
                        <td colSpan="2" style={{backgroundColor: "#2a403a", color: "white"}}>Detalles de la Ruta</td>
                      </tr>
                      <tr>
                        <td><b>Dificultad:</b></td>
                        <td>Moderada</td>
                      </tr>
                      <tr>
                        <td><b>Distancia:</b></td>
                        <td>6,4 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>269 m.</td>
                      </tr>
                      <tr>
                        <td><b>Tipo de Ruta:</b></td>
                        <td>Circular</td>
                      </tr>
                    </tbody>
                  </table>
                  <div id="map"></div>
                  <canvas id="altitudeChart"></canvas>
                </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                        <h1>Descripción de la Ruta</h1>
                        <hr />
                        <p className="descripcion">El Monte Tibidabo es el punto más alto de Barcelona y uno de los iconos más importantes de la ciudad condal. Además, en él se encuentra el parque de atracciones más antiguo de Barcelona, inaugurado en 1905 donde se puede disfrutar de más de 30 atracciones. <br /><br />Desde lo alto del monte, se puede ver el famoso Pico Aserrado de Montserrat, los Pirineos en el horizonte, el Templo Expiatorio del Sagrado Corazón, una impresionante iglesia visible desde cualquier lugar de Barcelona por la noche, la Torre de Collserola, construida para los Juegos Olímpicos de Barcelona de 1992 y la estructura más alta de toda la ciudad. <br /><br />El Parque Natural de Collserola cubre 8.000 hectáreas de bosques y prados protegidos siendo el gran "pulmón" verde de Barcelona. En términos geográficos, la sierra incorpora dos biodiversidades diferenciadas: la euroibérica y la mediterránea. <br /><br />Además de la abundante flora, el parque alberga 190 especies de animales, entre ellos ardillas, zorros, el jabalí ocasional y una gran variedad de aves. <br /><br />Se puede subir al Monte Tibidabo también a través de funicular o autobús. En el caso de que se vaya con niños pequeños o se prefiera dar una vuelta por el parque sin tener que subir a pie o en bicicleta, se puede llegar hasta allí a través de: <br /><br /><b>1. Funicular del Tibidabo: </b>Estación Avenida de Tibidabo, que se conecta con Plaza Cataluña con los trenes FGC. Allí, hay que coger el bus 196 y bajar en la parada Avenida Tibidabo 81. Una vez allí, hay que subirse al funicular que lleva hasta la cima de la montaña, muy cerca del parque de atracciones. <br /><br /><b>2. Tibibus: </b>Sale de Plaza Cataluña y va directo hasta el Parque de Atracciones sin paradas.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/tibidabo1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/tibidabo2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/tibidabo3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Tibidabo;
