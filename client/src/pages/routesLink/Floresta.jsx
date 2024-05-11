import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Floresta = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/floresta.gpx", {
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
                  <h1>Baixador de Vallvidrera - La Floresta<br />
                    <span>(Parc de Collserola, Barcelona, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/floresta.png" alt="" />
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
                        <td>9,2 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>335 m.</td>
                      </tr>
                      <tr>
                        <td><b>Tipo de Ruta:</b></td>
                        <td>Punto a Punto</td>
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
                        <p className="descripcion">Preciosa ruta por el Parque de Collserola, desde la estación de tren de Vallvidrera hasta la de La Floresta, pasando por zonas de bosque frondoso y disfrutando de vistas estupendas. También este recorrido es perfecto también para el trail-running. <br /><br />Se recomienda especial atención en las intersecciones, ya que el Parque de Collserola suele ser un espacio frecuentado por senderistas, ciclistas, corredores y niños disfrutando del aire libre.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/floresta1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/floresta2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/floresta3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Floresta;
