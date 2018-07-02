var startDate = new Date();
startDate.setUTCHours(0, 0, 0, 0);

Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

var map = L.map('map', {
    zoom: 13,
    fullscreenControl: true,
    center: [-38.692409, 145.807344]
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


// start of TimeDimension manual instantiation
var timeDimension = new L.TimeDimension({
        period: "P1D",
    });
// helper to share the timeDimension object between all layers
map.timeDimension = timeDimension; 
// otherwise you have to set the 'timeDimension' option on all layers.

var player        = new L.TimeDimension.Player({
    transitionTime: 10, 
    loop: false,
    startOver:true
}, timeDimension);

var timeDimensionControlOptions = {
    player:        player,
    timeDimension: timeDimension,
    position:      'bottomleft',
    autoPlay:      true,
    loopButton:		true,
    minSpeed:      1,
    speedStep:     1,
    maxSpeed:      15,
    timeSteps:	   1,
    limitMinimumRange: 1,
    timeSliderDragUpdate: true
};

L.Control.TimeDimensionCustom = L.Control.TimeDimension.extend({
    _getDisplayDateFormat: function(date){
        return date.format("dd mmm yyyy");
    }
});

var timeDimensionControl = new L.Control.TimeDimensionCustom(timeDimensionControlOptions);
map.addControl(timeDimensionControl);



var iconA = L.icon({
    iconUrl: 'img/pipiA.png',
    iconSize: [22, 22],
    iconAnchor: [10, 22]
});

var iconB = L.icon({
    iconUrl: 'img/pipiB.png',
    iconSize: [22, 22],
    iconAnchor: [10, 22]
});

var iconC = L.icon({
    iconUrl: 'img/pipiC.png',
    iconSize: [22, 22],
    iconAnchor: [10, 22]
});

var iconD = L.icon({
    iconUrl: 'img/pipiD.png',
    iconSize: [22, 22],
    iconAnchor: [10, 22]
});





var customLayerA = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
		if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {
                icon: iconA
                
            });
        }
        return L.circleMarker(latLng, {
			color: '#ff33cc',
			fillColor: '#ff33cc',
			radius: '14',
			fillOpacity: '0.4',
			opacity: '1.2',
			}).bindPopup ("This is A");
    },
    style: (function(feature) {
                return {
                    color: '#ff33cc',
                };})
});

var gpxLayerA = omnivore.gpx('data/pipiA.gpx', null, customLayerA).on('ready', function(e) {
    map.fitBounds(gpxLayerA.getBounds(), {
        paddingTopLeft: [160, 160],
        paddingBottomRight: [120, 120]
    });
});

var gpxTimeLayerA = L.timeDimension.layer.geoJson(gpxLayerA, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

var kmlLayerA = omnivore.kml('data/pipiA.kml');
var kmlTimeLayerA = L.timeDimension.layer.geoJson(kmlLayerA, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

gpxTimeLayerA.addTo(map);



var customLayerB = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
		if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {
                icon: iconB
            });
        }
        return L.circleMarker(latLng, {
			color: '#00ff00',
			fillColor: '#00ff00',
			radius: '14',
			fillOpacity: '0.4',
			opacity: '1.2',
			})
			.bindPopup ("This is B");
    },
    style: (function(feature) {
                return {
                    color: '#00ff00',
                };})
});

var gpxLayerB = omnivore.gpx('data/pipiB.gpx', null, customLayerB).on('ready', function(e) {
    map.fitBounds(gpxLayerB.getBounds(), {
        paddingTopLeft: [140, 140],
        paddingBottomRight: [120, 120]
    });
});

var gpxTimeLayerB = L.timeDimension.layer.geoJson(gpxLayerB, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

var kmlLayerB = omnivore.kml('data/pipiB.kml');
var kmlTimeLayerB = L.timeDimension.layer.geoJson(kmlLayerB, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

gpxTimeLayerB.addTo(map);





var customLayerC = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
		if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {
                icon: iconC
                
            });
        }
        return L.circleMarker(latLng, {
			color: '#0066ff',
			fillColor: '#0066ff',
			radius: '14',
			fillOpacity: '0.4',
			opacity: '1.2',
			}).bindPopup ("This is C");
    },
    style: (function(feature) {
                return {
                    color: '#0066ff',
                };})
});

var gpxLayerC = omnivore.gpx('data/pipiC.gpx', null, customLayerC).on('ready', function(e) {
    map.fitBounds(gpxLayerC.getBounds(), {
        paddingTopLeft: [50, 50],
        paddingBottomRight: [160, 160]
    });
});

var gpxTimeLayerC = L.timeDimension.layer.geoJson(gpxLayerC, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

var kmlLayerC = omnivore.kml('data/pipiC.kml');
var kmlTimeLayerC = L.timeDimension.layer.geoJson(kmlLayerC, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

gpxTimeLayerC.addTo(map);






var customLayerD = L.geoJson(null, {
    pointToLayer: function (feature, latLng) {
		if (feature.properties.hasOwnProperty('last')) {
            return new L.Marker(latLng, {
                icon: iconD,
            });
        }
        return L.circleMarker(latLng, {
			color: '#ffff00',
			fillColor: 'transparent',
			radius: '14',
			fillOpacity: '0.4',
			opacity: '1.2',
			})
			.bindPopup ("This is D");
    },
    style: (function(feature) {
                return {
                    color: '#ffff00',
                };})
});

var gpxLayerD = omnivore.gpx('data/pipiD.gpx', null, customLayerD).on('ready', function(e) {
    map.fitBounds(gpxLayerD.getBounds(), {
        paddingTopLeft: [160, 160],
        paddingBottomRight: [120, 120]
    });
});

var gpxTimeLayerD = L.timeDimension.layer.geoJson(gpxLayerD, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

var kmlLayerD = omnivore.kml('data/pipiD.kml');
var kmlTimeLayerD = L.timeDimension.layer.geoJson(kmlLayerD, {
    updateTimeDimension: true,
    addlastPoint: true,
    waitForReady: true
});

gpxTimeLayerD.addTo(map);
