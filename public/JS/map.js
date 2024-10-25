mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinate, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});


// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({color : "red"})
.setLngLat(coordinate)
.setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
    `<h4>${listing.location}</h4><p>Exact location will be provide after booking.</p>`
    )
)
.addTo(map);
console.log(coordinate);