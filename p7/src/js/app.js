var ViewModel = function () {
    'use strict';

    var self = this;

    self.model = new Model();
    self.churches = ko.observableArray();
    self.map = new GoogleMap();

    // Populate churches with churches from the Model
    self.model.getAllChurches().forEach(function (church) {
        self.churches.push(new ChurchData(church));
    });

    window.loadMap = function () {
        self.map.initMap(self.churches());
        // clearTimeout(self.googleTimeout);
        // $('#header-status').text("");
    };
};

ko.applyBindings(new ViewModel());
