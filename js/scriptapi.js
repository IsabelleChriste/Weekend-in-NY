// Foursquare API 
/*
client ID CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM
client sc QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC
YYYYMMDD
URL :  https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170125

*/

function loadData() {
    var $neibourghood = $('#neibourghood');

    //$venueTitle.text('');

    var place = $('#areaoftea').val();

    // URL retrieved from Foursquare API
    var begUrl = 'https://api.foursquare.com/v2/venues/explore?near=';
    var artsOnly = '&section=arts';
    var endUrl = '&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170130'

    var fsUrl = begUrl + place + artsOnly + endUrl;

    // Function to get the list display under the submit button
    $.getJSON(fsUrl, function (data) {
        allvenues = data.response.groups[0].items;
        console.log(allvenues);
        for (var i = 0; i < 5; i++) {
            var onevenue = allvenues[i];
            $neibourghood.append('<li>' + onevenue.venue.name + '</li>');
        };
    // If the URL does not work, an error message will appear    
    }).error(function (e) {
        $neibourghood.text('Venues not available!');
    });
    

    return false;

};
$('#neibourghood').click(loadData);