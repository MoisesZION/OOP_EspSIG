// Coordenadas aproximadas de Ciudad Montes, Bogotá
const ciudadMontes = [4.71099, -74.0721];

// Inicializar el mapa centrado en Ciudad Montes
const map = L.map('map').setView(ciudadMontes, 13);

// Capa base OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marcador en Ciudad Montes
L.marker(ciudadMontes)
    .addTo(map)
    .bindPopup('📍 Ciudad Montes, Bogotá')
    .openPopup();

// Evento click: agregar marcador donde hagas clic
map.on('click', function (e) {
    L.marker(e.latlng)
        .addTo(map)
        .bindPopup(
            `Lat: ${e.latlng.lat.toFixed(4)}<br>
             Lng: ${e.latlng.lng.toFixed(4)}`
        )
        .openPopup();
});
