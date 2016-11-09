// raw list of pubs with name and position
var pubs = [
    {
        name: 'Ye Olde Mitre',
        position: { lat: 51.518462, lng: -0.107338 },
    },
    {
        name: 'Lamb and Flag Covent Garden',
        position: { lat: 51.511722, lng: -0.125669 }
    },
    {
        name: 'Ye Olde Cheshire Cheese',
        position: { lat: 51.514351, lng: -0.107210 }
    },
    {
        name: 'The George Inn, Southwark',
        position: { lat: 51.504216, lng: -0.089784 }
    },
    {
        name: 'Prospect of Whitby',
        position: { lat: 51.507070, lng: -0.051122 }
    },
    {
        name: 'The Grapes, Limehouse',
        position: { lat: 51.508858, lng: -0.033945 }
    },
    {
        name: 'Jamaica Wine House',
        position: { lat: 51.512945, lng: -0.085626 }
    }
];

// informs the app what to do when data changes
var Pub = function (pub) {
    this.name = ko.observable(pub.name);
    this.position = ko.observable(pub.position);
    this.marker = ko.observable();
    this.wikiContent = ko.observable();
};

// global variables
var map,
    infoWindow,
    marker;

// Create an instance of a Google Map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.513678, lng: -0.098383 },
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });

}

var ViewModel = function () {
    var vm = this;

    vm.markers = [];

    vm.pubsArray = ko.observableArray();
    vm.filter = ko.observable('');

    pubs.forEach(function (pub) {
        vm.pubsArray.push(new Pub(pub));
    })

    // adds marker data and listener to each pub
    vm.pubsArray().forEach(function (pub) {
        marker = new google.maps.Marker({
            map: map,
            position: pub.position(),
            title: pub.name(),
            animation: google.maps.Animation.DROP
        });

        pub.marker = marker;

        vm.markers.push(marker);

        infoContent(pub);

        infoWindow = new google.maps.InfoWindow({
            content: '',
            maxWidth: '250'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(pub.wikiContent());
            infoWindow.open(map, this);
        });
    });

    // Animates selected pub
    vm.pubClick = function(pub) {
        if (pub.name) {
            map.setZoom(17);
            map.panTo(pub.position());
            pub.marker.setAnimation(google.maps.Animation.BOUNCE);
            infoWindow.setContent(pub.wikiContent())
            infoWindow.open(map, pub.marker);
        }

        setTimeout(function() {
            pub.marker.setAnimation(null);
            }, 2000);
    };

    // Filter list of pubs based on user input
    vm.filterPubs = ko.computed(function () {
        var filter = vm.filter().toLowerCase();

        if(!filter) {
            return vm.pubsArray();
        } else {
            return ko.utils.arrayFilter(vm.pubsArray(), function(pub) {
                return ko.utils.stringStartsWith(pub.name().toLowerCase(), filter);
            });
        };
    });

    vm.resetFilter = function() {
        vm.filter('');
    }

    function infoContent(pub) {

        var name = pub.name();

        var wikiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + name + '&format=json';
        var string;

        $.ajax({
            url: wikiUrl,
            dataType: 'jsonp',
            success: function (response) {
                console.log(response);
                pub.wikiContent(formatResponse(response));
            }
            // TODO add error handling
        });
    }

    function formatResponse(data) {
        var contentString =
            '<div><strong>' + data[0] + '</div></strong>' +
            '<p>' + data[2][0] + '</p>' +
            '<a href="' + data[3][0] + '" target="_blank">Link to Wikipedia article</a>';
        return contentString;
    }
};

$(document).ready(function() {
    initMap();
    ko.applyBindings(ViewModel());
});
