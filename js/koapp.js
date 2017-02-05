// List of two places in the array to begin with

var initialLocations = [
    {
        title: "Oren's Daily Roast",
        location: {
            lat: 40.7970001,
            lng:-73.9763774,
        },
        place: 'Broadway',
        distance: "Not too far from the zoo"
    },
    {
        title: "The Jolly Goat Coffee Bar",
        location: {
            lat: 40.7633605,
            lng:-73.9961698,
        },
        place: 'Hells Kitchen',
         distance: "Far from the zoo"
    }, 
       {
        title: "Housing Works Bookstore Cafe",
        location: {
            lat: 40.7247804,
            lng:-74.0007765,
        },
        place: 'Error checker: Lower Manhattan',
         distance: "Close to the zoo"
    }, 
       {
        title: "Two E Bar/Lounge",
        location: {
            lat: 40.7651635,
            lng:-73.9742651,
        },
        place: 'Upper East Side',
         distance: "Close to the zoo"
    }, 
       {
        title: "Té Company",
        location: {
            lat: 40.734505,
            lng:-74.0040957,
        },
        place: 'West Village',
        distance: "Far from the zoo"
    }, 
    
]
// Model of the locationsList, where how the data is constructed and observable
// Represent one line of the name of the coffee shop and area.
var locationsShow = function(data) {
    var self = this;
    this.title = data.title;
    this.place = data.place;
    this.distance = data.distance
}
// ViewModel where the Model gets exctracted to the HTML View. Bindings stuff.

var locationViewModel = function(){
    var self = this;
    
    
    this.locationsList = ko.observableArray([]);
    
    initialLocations.forEach(function(shopItem){
        self.locationsList.push(new locationsShow(shopItem));
    });
    // works to retrieve arts from Google API but not how to reset them.
    this.console = function(){
        var item = this.place;
        artyMap(item);
        self.removeli = function(item){self.remove(item);};
    };
    // filter the array by type: distance when radio buttons are clicked.
    
    this.venuesToGo = ko.observable('All');
    
    this.selectedVenues = function(){
      if (this.distance != ){
          self.locationsList.remove();
      }  
    };
    
    
}


ko.applyBindings(new locationViewModel());