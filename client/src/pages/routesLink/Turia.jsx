import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./routesLink.scss";

const Turia = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/turia.gpx", {
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
                  <h1>Parque Fluvial del Río Turia<br />
                    <span>(Valencia, Valencia, España)</span>
                  </h1>
                  <img src="../src/pages/routes/routesImg/turia.png" alt="" />
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
                        <td>21,4 km.</td>
                      </tr>
                      <tr>
                        <td><b>Desnivel Positivo:</b></td>
                        <td>142 m.</td>
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
                        <p className="descripcion">El Parque Fluvial del Túria es un recorrido natural de unos 30 kilómetros aproximadamente que rodea el río Túria, desde Vilamarxant hasta su desembocadura en la capital valenciana. <br /><br />En Vilamarxant está el mayor tramo de superficie del Parque Fluvial del rio Túria, el cual cuenta con unas 1.829,41 hectáreas en total. <br /><br />La Pea es el origen de este parque, un paraje natural por el que discurre el río, entre los municipios de Pedralba y Vilamarxant, hasta el término de Riba-roja de Túria durante unos 10 kilómetros aproximadamente siguiendo el cauce del río. <br /><br />En el Centro de Visitantes de Vilamarxant comienza el sendero multiusuario paralelo al río Turia, el cual se puede recorrer andando, en bicicleta o a caballo, permitiendo disfrutar de la riqueza natural y patrimonial de este lugar. <br /><br />Se recomienda prestar atención a las indicaciones de cada sendero, ya que hay mucha afluencia de ciclistas y senderistas, compartiendo tramos del recorrido en ciertos puntos.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/turia1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/turia2.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/turia3.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Turia;
