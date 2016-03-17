function initMap() {

	//Get a reference to the map container
	//jQuery returns an object rather than the element
	//.get(0) says to get the first element from the result
	var mapContainer = $('#map-container').get(0);

	//prepare the map options
	var options = {
		center: {
			lat: -41.290401,
			lng: 174.782040,
		},
		zoom: 13,
		styles: [{  "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#000000" }
                    ]
                },{
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#e3e3e3" }
                    ]
                },{
                    "featureType": "landscape.natural",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#bbbbbb" }
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#c3c3c3" }
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#000000" }
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#cccccc" }
                    ]
                },{
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#444444" }
                    ]
                },{
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "transit",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "transit",
                    "elementType": "labels.text",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#d27142" }
                    ]
                },{
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#ffffff" }
                    ]
                },
        ]
}

	//Create the map
	map = new google.maps.Map( mapContainer, options );

	//Set up the allMakers array
    allMarkers = [];
        allMarkers.push ( {name:"Reading Cinemas", latlng: new google.maps.LatLng(-41.292844,174.779781)} );
        allMarkers.push ( {name:"Embassy Theatre", latlng: new google.maps.LatLng(-41.294182,174.784324)} );
        allMarkers.push ( {name:"Light House Cuba", latlng: new google.maps.LatLng(-41.296033,174.775271)} );
        allMarkers.push ( {name:"The Roxy Cinema", latlng: new google.maps.LatLng(-41.315670,174.816084)} );
        allMarkers.push ( {name:"Penthouse Cinema", latlng: new google.maps.LatLng(-41.305669,174.763536)} );

    for(var i=0; i < allMarkers.length; i++) {
        var marker = new google.maps.Marker({
            position: allMarkers[i].latlng, 
            map:map, 
            title: allMarkers[i].name, 
            icon: 'images/marker.png'
        });
    }
    //Show the user's location 
    showUserLocation();
}

function showUserLocation(){

    //Only run if the device supports geolocation 
    if( navigator.geolocation ){

        //prompt user for their location
        navigator.geolocation.getCurrentPosition(function(position){

            //Place a marker where the user is
            userLocation = new google.maps.Marker({
                position: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }, 
                map: map,
                icon: 'images/usermarker.png'
            });

            //move the map to focus on user's location
            map.panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
        });
    }
}

function success() {
    document.getElementById("form_before").className = "hidden_form";
    document.getElementById("form_after").className = "visible";
}

