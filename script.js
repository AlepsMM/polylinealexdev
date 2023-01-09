  // creo un mapa en el elemento div con id "map"
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: {lat: 22.76176544435643, lng: -102.54747938849908}
  });

  // creo un servicio de Directions y le paso el mapa
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer({map: map});

  // defino los puntos de origen y destino
  var start = new google.maps.LatLng(22.76176544435643, -102.54747938849908);
  var end = new google.maps.LatLng(22.717678583307382, -102.48683181542064);

  // defino la petición de Directions
  var request = {
    origin: start,
    destination: end,
    waypoints: [
    {location: new google.maps.LatLng(22.765246370355136, -102.57692979962212)},
    {location: new google.maps.LatLng(22.716719523071912, -102.49217042891186)},
    {location: new google.maps.LatLng(22.715566039621553, -102.4848227841789)},
  ],
    travelMode: 'DRIVING'
  };
// solicito las indicaciones y dibujo la polyline
directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      // obtengo el array de puntos que forman la polyline
      var path = result.routes[0].overview_path;

      // creo una polyline con el color café como la ruta 14 y le paso el array de puntos
      var polyline = new google.maps.Polyline({
        strokeColor: '#8B4513',
        path: path
      });

      // añado la polyline al mapa
      polyline.setMap(map);

      // ajusto el mapa para que se vea toda la polyline
      map.fitBounds(polyline.getBounds());
    }
  });

  
  