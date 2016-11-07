var Model = function () {
    'use strict';

    var self = this;

    self.churches = [
        {
            name: 'St Martin\'s Church, Canterbury',
            position: { lat: 51.278031, lng: 1.093700 }
        },
        {
            name: 'Church of St Peter-on-the-Wall',
            position: { lat: 51.735363, lng: 0.939913 }
        },
        {
            name: 'Escomb Saxon Church',
            position: { lat: 54.665989, lng: -1.708082 }
        },
        {
            name: 'Ripon Cathedral',
            position: { lat: 54.135016, lng: -1.520425 }
        },
        {
            name: 'Ripon Cathedral',
            position: { lat: 54.135016, lng: -1.520425 }
        },
        {
            name: 'Hexham Abbey',
            position: { lat: 54.971586, lng: -2.103106 }
        },
        {
            name: 'St Peter\'s Church',
            position: { lat: 54.913146, lng: -1.375030 }
        },
        {
            name: 'St Paul\'s Church',
            position: { lat: 54.980442, lng: -1.472309 }
        },
        {
            name: 'St Laurence\'s Church',
            position: { lat: 51.347026, lng: -2.253815 }
        }
    ];

    self.getAllChurches = function () {
        return self.churches;
    };
}

var ChurchData = function (church) {
    'use strict';

    var self = this;

    self.name = church.name;
    self.position = church.position;
};
