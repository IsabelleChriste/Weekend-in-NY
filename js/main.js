// Loading the map centered in New York //
// var markers = [];
function initMap() {
    console.log("initMap");
    var styles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
            }
        ]
    }
        , {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#d1dc91"
            }
        ]
    }
        , {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
            }
                , {
                    "lightness": 45
            }
                , {
                    "color": "#56584b"
            }
        ]
    }
        , {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
            }
        ]
    }
        , {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "transit.line",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "transit.station",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "transit.station.rail",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
        , {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#83b5c9"
            }
                , {
                    "visibility": "on"
            }
        ]
    }
]
    // Lat Lng of the Zoo
    var nyczoo = {
        lat: 40.767770,
        lng: -73.971855
    };
    
    // Retrieving google map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: nyczoo,
        zoom: 12,
        styles: styles,
        mapTypeControl: true
    });

    // Setting and Changing color of Marker as one hovers over it
    var defaultIcon = makeMarkerIcon('EAFF31');
    var hoverIcon = makeMarkerIcon('fff');
    var zooIcon = makeMarkerIcon('9b29ec');

    function makeMarkerIcon(markercolor) {
        var markerImage = new google.maps.MarkerImage('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + markercolor, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34), new google.maps.Size(21, 34));
        return markerImage;
    }

    var zooMarker = new google.maps.Marker({
        position: nyczoo,
        title: "Central Park Zoo",
        icon: zooIcon,
        animation: google.maps.Animation.DROP,
        id: i
    });
    zooMarker.addListener('click', function () {
                populateInfoWindow(this, largeInfowindow);
            })
    
    zooMarker.setMap(map);
    // One marker per location and add to an array.
    var markers = [];
    for (var i = 0; i < initialLocations.length; i++) {
        var position = initialLocations[i].location;
        var title = initialLocations[i].title;
        var place = initialLocations[i].place;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            icon: defaultIcon,
            animation: google.maps.Animation.DROP,
            id: i
        });
        markers.push(marker);
        marker.addListener('click', function () {
                populateInfoWindow(this, largeInfowindow);
            })
            // Event listener for Marker
        marker.addListener('mouseover', function () {
            this.setIcon(hoverIcon);
        });
        marker.addListener('mouseout', function () {
            this.setIcon(defaultIcon);
        });
        marker.setMap(map);
    }
    // Event listener for buttons show, hide and filter locations
    //document.getElementById('show-listings').addEventListener('click', showListings);
    //document.getElementById('hide-listings').addEventListener('click', hideListings);
    // Add text in the information window
    var largeInfowindow = new google.maps.InfoWindow();

    function populateInfoWindow(marker, infowindow) {
        if (largeInfowindow.marker != marker) {
            largeInfowindow.marker = marker;
            largeInfowindow.setContent('<div>' + marker.title + '</div>');
            largeInfowindow.open(map, marker);
            
        }
    }
    function populatezooInfoWindow(zooMarker, infowindow){
            largeInfowindow.zooMarker = zoomarker;
            largeInfowindow.open(map, zooMarker);
            
    }
    //Add possibility of showing markers
    function showListings() {
        for (var z = 0; z < markers.length; z++) {
            markers[z].setMap(map);
        }
    }
    //Add possibility of hiding markers
    function hideListings() {
        for (var z = 0; z < markers.length; z++) {
            markers[z].setMap(null);
        }
    }


    marker.addListener('click', function () {
        largeInfowindow.open(map, marker);
    });

}