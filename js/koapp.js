// List of two places in the array to begin with

var initialLocations = [
    {
        title: "Oren's Daily Roast",
        location: {
            lat: 40.7970001,
            lng:-73.9763774,
        },
        place: 'Broadway'
    },
    {
        title: "The Jolly Goat Coffee Bar",
        location: {
            lat: 40.7633605,
            lng:-73.9961698,
        },
        place: 'Hells Kitchen'
    }, 
       {
        title: "Housing Works Bookstore Cafe",
        location: {
            lat: 40.7247804,
            lng:-74.0007765,
        },
        place: 'Lower Manhattan'
    }, 
       {
        title: "Two E Bar/Lounge",
        location: {
            lat: 40.7651635,
            lng:-73.9742651,
        },
        place: 'Upper East Side'
    }, 
       {
        title: "Té Company",
        location: {
            lat: 40.734505,
            lng:-74.0040957,
        },
        place: 'West Village'
    }, 
    
]
// Model of the locationsList, where how the data is constructed and observable
// Represent one line of the name of the coffee shop and area.
var locationsShow = function(data) {
    var self = this;
    this.title = data.title;
    this.place = data.place;
}
// ViewModel where the Model gets exctracted to the HTML View. Bindings stuff.

var locationViewModel = function(){
    var self = this;
    
    
    this.locationsList = ko.observableArray([]);
    
    initialLocations.forEach(function(shopItem){
        self.locationsList.push(new locationsShow(shopItem));
    });
    
   /* <li data-bind="text: title"></li>
                    <a id="areaoftea" data-bind="text: place, click: clickcounter"></a>
                </ul>
            </h3>
        </div>
        <div id="area" class="col-lg-6">
            <h3 id="neighbourhood">What to do in the neighborhood?</h3>
            <ul>
                <li data-bind="click: numberclicks"></li>*/
    
}


ko.applyBindings(new locationViewModel());