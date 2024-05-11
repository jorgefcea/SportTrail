import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Beas = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/beas.gpx", {
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
                  <h1>Parque Periurbano Dehesa del Generalife<br />
                    <span>(Beas de Granada, Granada, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/beas.png" alt="" />
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
                        <td>16,1 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>370 m.</td>
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
                        <p className="descripcion">Siguiendo las cumbres que separan Beas y Granada se desarrolla este precioso recorrido con algunas de las mejores vistas de todas las montañas de Sierra Nevada que se pueden tener desde cualquier lugar.  <br /><br />Es particularmente espectacular en invierno, cuando se pueden ver todos los picos nevados y la estación de esquí, desde El Caballo en el oeste hasta Picón de Jerez en el este.  <br /><br />Se recomienda llevar agua, protector solar y snacks ya que es una ruta bastante larga, especialmente si se hace ida y vuelta (32 kilómetros aproximadamente). También es aconsejable comenzar temprano, sobre todo si se realiza entre mayo y octubre, ya que las temperaturas pueden bastante ser elevadas a medio día.<br /><br />Para volver a Beas desde Granada se puede optar por coger el autobús de la línea 300. También hay servicios de taxi y empresas privadas VTC.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/beas1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/beas2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/beas3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Beas;
