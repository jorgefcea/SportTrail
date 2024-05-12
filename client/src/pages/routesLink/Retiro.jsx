import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Retiro = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/retiro.gpx", {
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
                  <h1>Parque del Retiro<br />
                    <span>(Madrid, Comunidad de Madrid, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/retiro.png" alt="" />
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
                        <td>Fácil</td>
                      </tr>
                      <tr>
                        <td><b>Distancia:</b></td>
                        <td>3,5 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>42 m.</td>
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
                        <p className="descripcion">El Parque de El Retiro, nombrado Patrimonio de la Humanidad por la UNESCO, cuenta con una superficie de más de 125 hectáreas y más de 15.000 árboles, siendo un verdadero oasis verde en el corazón de la capital. <br /><br />Este parque es un maravilloso espacio verde donde poder relajarse, disfrutar de la historia o hacer ejercicio, siendo el lugar favorito de lugareños y turistas, para patinar, dar un paseo largo o correr. <br /><br />Además, mientras se recorre este parque, se puede visitar la Biblioteca Pública Eugenio Trías, el Centro Cultural Casa de Vacas, el Polideportivo Municipal La Chopera,  o el entorno del Observatorio Meteorológico, varias fuentes históricas, como la Fuente de Galápagos, levantada en honor a la entonces princesa Isabel II, o el lago artificial donde se pueden alquilar barcas y pasar un buen rato remando. <br /><br />Para los apasionados de la botánica, en El Retiro también se encuentra el ahuehuete o ciprés de Moctezuma , uno de los árboles más longevos de Madrid; o el más antiguo en la actualidad, un olivo de 627 años que data aproximadamente de 1396, plantado en una de las dehesas cerca de la Puerta del Ángel Caído.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/retiro1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/retiro2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/retiro3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Retiro;
