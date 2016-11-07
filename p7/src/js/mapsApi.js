'use strict';

var map;
var markers = [];
var infowindow = null;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.513678, lng: -0.098383 },
        zoom: 10
    });

    var bounds = new google.maps.LatLngBounds();

    var infowindow = new google.maps.InfoWindow({
        content: 'test'
    });

    for (var i = 0; i < ViewModel.churches.length; i++) {
        var position = ViewModel.churches[i].position;

        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: churches[i].name,
            wikiSummary: 'test'
        });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(this.wikiSummary);
            infowindow.open(map, this);
        })

    bounds.extend(position);
    }

  map.fitBounds(bounds);
}
