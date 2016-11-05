var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.513678, lng: -0.098383},
    zoom: 13
  });
}
