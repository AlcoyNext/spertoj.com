// 
//  PROFILE
//

profile();


// 
//  GIS
//

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxjb3luZXh0IiwiYSI6ImNsanNhaWg5OTA0cnQzZnA5bjA2b2ZkNHYifQ.MWQzPqXVPqt3Kj0LxIWBdQ';
// PRODUCTION
//mapboxgl.accessToken = 'pk.eyJ1IjoiYWxjb3luZXh0IiwiYSI6ImNsanNiaHdhejA4eDMzZm4weGhqYTRnaHcifQ.37crDNKv4geComo0kCPQag';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alcoynext/cljsfzfr9019401p596srfj11',
    center: [-0.47298, 38.69826],
    zoom: 12,
    language: 'es'
});

const control_navigation = new mapboxgl.NavigationControl();
map.addControl(control_navigation);

const control_geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
});
map.addControl(control_geolocate);



map.on('load', () => {

});

map.on('idle', () => {

});