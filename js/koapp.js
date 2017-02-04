// Model with data, list of location in NYC
var initialLocations = [
    {
        title: "Micro Museum",
        location: {
            lat: 40.687607,
            lng: -73.989732
        },
        type: "arts"
        }
    , {
        title: "Devocion Café",
        location: {
            lat: 40.715965,
            lng: -73.964783
        },
        type: "tea"
        }
    , {
        title: "Greenlight Bookstore",
        location: {
            lat: 40.686177,
            lng: -73.974567
        },
        type: "bookshop"
        }
    , {
        title: "Mariebelle",
        location: {
            lat: 40.723136,
            lng: -74.002337
        },
        type: "tea"
        }
    , {
        title: "Street Walk Art",
        location: {
            lat: 40.714162,
            lng: -73.961753
        },
        type: "walking"
        }
    ];

// ViewModel that shows the data to be displayed on the view
var locationsModel = function(){
    var self = this;
    
    
    
    
    /*this.locationsToShow = ko.pureComputed(function(){
        var desireType = this.typeToShow();
        if (desireType == 'all'){ return this.locationsList();}
    }, this);*/
    
// listLocation should show title and type
    
    
}    
ko.applyBindings(new locationsModel());

    /*self.removePlace = function (locationsItem) {
        self.locationsList.remove(locationsItem, this.marker)
    };*/

