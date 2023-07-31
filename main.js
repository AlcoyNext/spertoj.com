// 
//  PROFILE
//

profile();


// 
//  GIS
//

new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});