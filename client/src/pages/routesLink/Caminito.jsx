import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Caminito = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/caminito.gpx", {
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
                  <h1>El Caminito del Rey<br />
                    <span>(Ardales, Málaga, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/caminito.png" alt="" />
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
                        <td>6,8 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>280 m.</td>
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
                        <p className="descripcion">Es necesario hacer una reserva con meses de antelación para recorrer este sendero ya que es una ruta muy popular: <b><u>https://www.caminitodelrey.info/es</u></b>. <br /><br />El recorrido del Caminito del Rey es una ruta lineal no circular de sentido único. Fue una vez conocido como el "sendero más peligroso de España", conocido y transcurrido entonces solo por los amantes de la escalada en roca. Hoy en día el sendero ha sido restaurado en buena parte, siendo una de las rutas más populares y espectaculares de España. <br /><br />Su construcción se inició en 1901 y se terminó en 1905. El rey Alfonso XIII atravesó la pasarela en 1921 para la inauguración de la presa del Conde del Guadalhorce. La pasarela tiene 1 metro de ancho y se eleva más de 100 metros sobre el río. <br /><br />El sendero sigue el desfiladero de Gaitanes en El Chorro. Es un paseo espectacular sobre puentes de madera al lado de los acantilados. <br /><br />Se recomienda optar por esta ruta si eres un excursionista aventurero y experimentado. Con las renovaciones recientes es mucho más seguro, sin embargo, necesitas usar casco. No se permiten niños menores de 8 años.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/caminito1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/caminito2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/caminito3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Caminito;
