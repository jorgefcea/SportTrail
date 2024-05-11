import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Senderoagua = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/senderoagua.gpx", {
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
                  <h1>Sendero del Agua - Camino Puricelli<br />
                    <span>(Cercedilla, Comunidad de Madrid, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/senderoagua.png" alt="" />
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
                        <td>9,0 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>274 m.</td>
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
                        <p className="descripcion">Esta fantástica ruta es una de las más conocidas de este precioso valle de la vertiente sur del Guadarrama. <br /><br />El recorrido comienza por un bosque lleno de robles, dando paso a continuación a un pinar con mezcla de cerezos, arces y fresnos, que crecen en la cercanía del Arroyo de la Venta. <br /><br />En el interior del cerrado pinar, los claros del bosque permiten tener amplios panoramas que se extienden desde el fondo de la depresión abierta por el arroyo de la Venta hasta las alturas de Siete Picos. <br /><br />Atravesar y caminar junto al arroyo de Matalobos, el arroyo del Colladillo del Rey, del Butrón y de la Piñuela. <br /><br />También se pasa por verdes  prados destinados a los caballos y al ganado vacuno, antes de seguir por el Camino del Agua. <br /><br />Las umbrías boscosas ocultan este bonito Camino del Agua, que pasa desapercibido para quien no está iniciado en los secretos de la Fuenfría. <br /><br />Se trata de un camino muy entretenido por la variedad de rincones que esconde, así como por las perspectivas que regala de esta parte del Guadarrama. <br /><br />Atravesar algunos puentes de madera que cruzan sobre el arroyo de la Venta. <br /><br />Sin separarse del río, caminar junto alguna pequeña represa y veredas. Desde aquí, los claros de los bosques permiten contemplar inéditas perspectivas del fondo de la Fuenfría, así como de La Peñota, Peña Águila y Peña Bercial.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/senderoagua1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/senderoagua2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/senderoagua3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Senderoagua;
