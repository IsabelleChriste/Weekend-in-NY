// List of two places in the array to begin with
var initialLocations = [
    {
        title: "Oren's Daily Roast",
        location: {
            lat: 40.7970001,
            lng: -73.9763774,
        },
        place: 'Broadway',
        distance: "Not too far from the zoo",
        icon: 'defaultIcon'
    }
        , {
        title: "The Jolly Goat Coffee Bar",
        location: {
            lat: 40.7633605,
            lng: -73.9961698,
        },
        place: 'Hells Kitchen',
        distance: "Far from the zoo",
        icon: 'defaultIcon'
    }
        , {
        title: "Housing Works Bookstore Cafe",
        location: {
            lat: 40.7247804,
            lng: -74.0007765,
        },
        place: 'Error checker: Lower Manhattan',
        distance: "Close to the zoo",
        icon: 'defaultIcon'
    }
        , {
        title: "Two E Bar/Lounge",
        location: {
            lat: 40.7651635,
            lng: -73.9742651,
        },
        place: 'Upper East Side',
        distance: "Close to the zoo",
        icon: 'defaultIcon'
    }
        , {
        title: "Té Company",
        location: {
            lat: 40.734505,
            lng: -74.0040957,
        },
        place: 'West Village',
        distance: "Far from the zoo",
        icon: 'defaultIcon'
    },

]



// Model of the locationsList, where how the data is constructed and observable
// Represent one line of the name of the coffee shop and area.
var locationsShow = function (data) {
    var self = this;
    this.title = data.title;
    this.location = data.location;
    this.place = data.place;
    this.distance = data.distance;
    this.icon = data.icon;
}

// ViewModel where the Model gets exctracted to the HTML View. Bindings stuff.
var locationViewModel = function () {
    //console.log('vm');
    
    var self = this;
    // Setting locationList from the initialLocations list that has already populated. 
    self.locationsList = ko.observableArray([]);
    initialLocations.forEach(function (shopItem) {
        self.locationsList.push(new locationsShow(shopItem));
    });
    // works to retrieve arts from Google API but not how to reset them.
    self.console = function () {
        var item = this.place;
        artyMap(item);
    };

    // this is the array with values of the radio buttons 
    self.categories = ko.observableArray(["All", "Close to the zoo", "Not too far from the zoo", "Far from the zoo"]);
    // this is the checked: venuesToGo from the radio button which represent all the venues.
    self.venuesToGo = ko.observable(this.categories()[0]);
    // This is a new array that's gonna be displayed filtered by distance.
    self.selectedCategory = ko.computed(function () {
        // this makes the current view for user on screen.
        var current = self.venuesToGo();
        // this is a new array that will contained filtered venues.
        var correspondingLocations = ko.observableArray([]);
        // this means that is the button "All" is clicked, it returns the usual locations lists.
        if (current === "All") {
            return self.locationsList();
        }
        // if another button is clicked, it triggers this
        else {
            // it looks at each item in the list and compares it with the current button.
            self.locationsList().forEach(function (location) {
                    var hasCategory = location.distance === current; // true or false

                    // console.log(location.distance, current, hasCategory);
                    // if it is true that they match, location is pushed into the array.
                    if (hasCategory) {
                        correspondingLocations.push(location);
                    }
                })
                // once done, it shows the array of filtered locations.
            return correspondingLocations();
        }
    });

}
ko.applyBindings(new locationViewModel());