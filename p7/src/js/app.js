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
        name: 'The Mayflower',
        position: { lat: 51.501799, lng: -0.053608 }
    },
    {
        name: 'The George Inn, Southwark',
        position: { lat: 51.504216, lng: -0.089784 }
    },
    {
        name: 'Angel',
        position: { lat: 51.500572, lng: -0.059104 }
    },
    {
        name: 'The Prospect of Whitby',
        position: { lat: 51.507070, lng: -0.051122 }
    },
    {
        name: 'The Grapes',
        position: { lat: 51.508858, lng: -0.033945}
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

    pubs.forEach(function (pub) {
        vm.pubsArray.push(new Pub(pub));
    })

    // adds marker data to each pub
    vm.pubsArray().forEach(function (pub) {
        console.log(pub);
        marker = new google.maps.Marker({
            map: map,
            position: pub.position(),
            title: pub.name(),
            animation: google.maps.Animation.DROP
        });

        pub.marker = marker;

        vm.markers.push(marker);

        infoWindow = new google.maps.InfoWindow({ });

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(getInfoContent(pub));
            infoWindow.open(map, this);
        });
    });

    // Animates selected pub
    vm.pubClick = function(pub) {
        if (pub.name) {
            map.setZoom(17);
            map.panTo(pub.position());
            debugger;
            pub.marker.setAnimation(google.maps.Animation.BOUNCE);
            infoWindow.open(map, pub.marker);
        }

        setTimeout(function() {
            pub.marker.setAnimation(null);
            }, 2000);
    };

    function getInfoContent(pub) {
        var name = pub.name();
        var wikiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + name + '&format=json&callback=wikiCb';

        $.ajax({
            url: wikiUrl,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (response) {
                pub.wikiContent = formatInfoContent(response);
                return pub.wikiContent;
            }
        });
    };

    function formatInfoContent(wikiData) {
        return 'test';
    }
};

$(document).ready(function() {
    initMap();
    ko.applyBindings(ViewModel());
});
