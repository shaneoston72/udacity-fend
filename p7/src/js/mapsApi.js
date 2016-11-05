'use strict';

var map;
var markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 51.513678, lng: -0.098383 },
    zoom: 10
  });

  var bounds = new google.maps.LatLngBounds();

  for (var i = 0; i < churches.length; i++) {
      var position = churches[i].position;

      var marker = new google.maps.Marker({
          map: map,
          position: position,
      });

      bounds.extend(position);

      markers.push(marker);
  }

  map.fitBounds(bounds);
}
