export function generateMap(gameState, handleCountryClick) {
  const map = L.map('mapContainer').setView([52, 10], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  fetch('../assets/europe.geojson')
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, {
        onEachFeature: (feature, layer) => {
          layer.on('click', () => {
            const code = feature.properties.ISO_A2;
            handleCountryClick(code);
          });
        },
        style: {
          color: '#333',
          weight: 1,
          fillColor: '#ccc',
          fillOpacity: 0.6
        }
      }).addTo(map);
    });
}