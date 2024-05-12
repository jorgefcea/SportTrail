import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Rambla = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/rambla.gpx", {
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
                  <h1>La Rambla<br />
                    <span>(Barcelona, Barcelona, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/rambla.png" alt="" />
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
                        <td>2,7 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>33 m.</td>
                      </tr>
                      <tr>
                        <td><b>Tipo de Ruta:</b></td>
                        <td>Ida y Vuelta</td>
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
                        <p className="descripcion">Este paseo por la ciudad es por excelencia uno de los imprescindibles de Barcelona. Ofrece una bocanada de energía por el movimiento frenético de la ciudad, una teatralidad audaz y un diseño urbano increíble. <br /><br />Barcelona es, sin duda, una de las ciudades europeas más dinámicas con miles de actividades diferentes para disfrutarla por sus divertidas tonalidades, vitalidad, ruido y olores. <br /><br />No se puede olvidar visitar el mercado de La Boqueria, su colección de kioscos, tiendas, cafés y el caos general al aire libre que se extiende desde la emblemática Plaça de Catalunya hasta el mar. <br /><br />La Rambla de Barcelona fue originalmente un curso de agua, un arroyo de arena llamado "rmel" (arena en árabe). No es de extrañar que Federico García Lorca llamara a esto la única calle en el mundo que deseaba que nunca terminara: el espectáculo de la humanidad continúa implacablemente: mimos, acróbatas, malabaristas, músicos, titiriteros, retratistas, bailarines, raperos y rockeros se extienden por todo el paseo de La Rambla. <br /><br />Una pista para peatones entre dos carriles de tráfico, la Rambla sigue siendo un evento esencial en Barcelona. Vendedores ambulantes, propietarios de quioscos, loros y periquitos a lo largo de la Rambla dels Ocells (Rambla de los pájaros) crean una cacofonía de cantos de pájaros y silbidos que claman sobre el ruido de los taxis y las motos.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/rambla1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/rambla2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/rambla3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Rambla;
