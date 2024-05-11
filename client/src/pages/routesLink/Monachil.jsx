import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import Chart from "chart.js/auto";
import "./monachil.scss";

const Monachil = () => {

  useEffect(() => {
    
    // Inicializa el mapa
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Carga el mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Carga el archivo GPX
    new L.GPX("../src/pages/routesLink/gpx/monachil.gpx", {
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
                  <h1>Cahorros - Río Monachil</h1>
                  <img src="../src/pages/routes/routesImg/cahorros.jpg" alt="" />
                </div>
                <div className="routesInfo2">
                    <section className="promos container" id="lista-1">
                        <h1>Recorrido y Altitud de la Ruta</h1>
                        <hr />
                        <p><b>Distancia:</b> 4,0 km.</p>
                        <span>(Monachil, Granada, España)</span>
                        <div id="map"></div>
                        <canvas id="altitudeChart"></canvas>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                        <h1>Descripción de la Ruta</h1>
                        <hr />
                        <p className="descripcion">La ruta de los Cahorros es uno de los destinos al aire libre más populares en la provincia de Granada. <br /><br />Esta aventura comienza en el pueblo de Monachil (del latín, monasterio), localidad granadina situada a 14 km de la capital. <br /><br />Monachil se encuentra dentro de un valle en el Parque Nacional y Natural de Sierra Nevada y es también conocido por la estación de esquí de Sierra Nevada. <br /><br />A lo largo de esta caminata se pasa por cascadas, rocas erosionadas por el paso del cauce del río Monachil, puente colgante, Cueva de las Palomas y vistas espectaculares a la ribera del río. <br /><br />Esta ruta circular está llena de flores silvestres, árboles frutales como albaricoqueros, almendros, cerezos y manzanos. Primavera es la estación del año más recomendable, ya que las flores están en su pleno esplendor. <br /><br />Es recomendable evitar ir en fin de semana, puesto que hay mucha afluencia de senderistas. <br /><br />Se puede aparcar el coche en el aparcamiento de la Carretera de El Purche o en el de la Calle Huenes.</p>
                    </section>

                    <hr />

                    <section className="promos container" id="lista-1">
                      <h1>Galería de Imágenes</h1>
                      <hr />
                      <div className="imageGallery">
                          <div className="horizontalImages">
                              <img src="../src/pages/routes/routesImg/cahorros1.png" alt="Imagen 1" />
                              <img src="../src/pages/routes/routesImg/cahorros3.png" alt="Imagen 2" />
                          </div>
                          <div className="verticalImage">
                              <img src="../src/pages/routes/routesImg/cahorros2.png" alt="Imagen 3" />
                          </div>
                      </div>
                  </section>
                </div>
            </div>
        </div>
    );
};

export default Monachil;
