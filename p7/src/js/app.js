var ViewModel = function () {
    'use strict';

    var self = this;

    self.model = new Model();
    self.churches = ko.observableArray();

    // Populate churches with churches from the Model
    self.model.getAllChurches().forEach(function (church) {
        self.churches.push(new ChurchData(church));
    });
};

ko.applyBindings(new ViewModel());
