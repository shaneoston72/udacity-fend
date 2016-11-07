'use strict';

var GoogleMap = function () {
    'use strict';

    var self = this,
        churchLocations = ko.observableArray([]);

    self.map = '';

    self.initMap = function(churches) {
        self.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 51.513678, lng: -0.098383 },
            zoom: 10
        });

        var bounds = new google.maps.LatLngBounds();

        var infowindow = new google.maps.InfoWindow({
            content: 'test'
        });

        var markers = [];

        for (var i = 0; i < churches.length; i++) {
            var position = churches[i].position();

            var marker = new google.maps.Marker({
                map: self.map,
                position: position,
                title: churches[i].name(),
                wikiSummary: 'test'
            });

            markers.push(marker);

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(this.title);
                infowindow.open(map, this);
            })

        bounds.extend(position);
        }

      self.map.fitBounds(bounds);
    }
}
