import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Cazadores = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/cazadores.gpx", {
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
                  <h1>Senda de los Cazadores<br />
                    <span>(Parque Nacional de Ordesa y Monte Perdido, Huesca, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/cazadores.png" alt="" />
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
                        <td>Difícil</td>
                      </tr>
                      <tr>
                        <td><b>Distancia:</b></td>
                        <td>19,2 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>1.172 m.</td>
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
                        <p className="descripcion">Para llegar a la Pradera de Ordesa, donde comienza esta ruta, hay que coger un autobús desde Torla. <br /><br />Una vez en el aparcamiento de la Pradera, hay que cruzar el Río Arazas y coger el camino de la derecha, donde se comienza a ascender sin demasiada dificultad. <br /><br />Después de subir aproximadamente 2 kilómetros y medio, se llega al mirador de Calcilarruego, desde donde se puede disfrutar de vistas increíbles del valle de Ordesa.  <br /><br />Seguir por el sendero GR®11 hasta las 3 Sorores (Cilindro, Monte Perdido y Soum de Ramond) y descender lentamente hacia el valle, llegando a un cruce donde hay que seguir recto hasta una desviación a la derecha que lleva al Refugio de Góriz. <br /><br />Más adelante se ven las cascadas espectaculares del río Arazas. Girar a la izquierda en las Cascadas del Estrecho y la Cueva, y regresar por el lado norte del río. <br /><br />Se recomienda llevar buen calzado de senderismo ya que la Senda de los Cazadores tiene bastante piedra suelta.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/cazadores1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/cazadores2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/cazadores3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Cazadores;
