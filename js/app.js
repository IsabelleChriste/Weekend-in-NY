var initialLocations = [
    {
        title: "Micro Museum"
        , location: {
            lat: 40.687607
            , lng: -73.989732
        }
        }
    , {
        title: "Devocion Café"
        , location: {
            lat: 40.715965
            , lng: -73.964783
        }
        }
    , {
        title: "Greenlight Bookstore"
        , location: {
            lat: 40.686177
            , lng: -73.974567
        }
        }
    , {
        title: "Mariebelle"
        , location: {
            lat: 40.723136
            , lng: -74.002337
        }
        }
    , {
        title: "Street Walk Art"
        , location: {
            lat: 40.714162
            , lng: -73.961753
        }
        }
    ]
var locations = function (data) {
    this.title = data.title;
    this.location = data.location;
}

var ViewModel = function () {
    var self = this;
    self.newPlace = ko.observable([]);
    self.locationsList = ko.observableArray([]);
    initialLocations.forEach(function (locationsItem) {
        self.locationsList.push(new locations(locationsItem));
    })
    self.addPlace = function(){
        self.locationsList.push(new locations({ title: this.newPlace() }));
    };
    self.removePlace = function(locationsItem){ self.locationsList.remove(locationsItem, this.marker) };
    
    
   
    
}
ko.applyBindings(new ViewModel());