// Foursquare API 
/*
client ID CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM
client sc QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC
YYYYMMDD
URL :  https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170125

*/
/* When clicking on the neighbourhood of the tea or coffee shops, the API retrieves places of arts from around it.*/

function artyMap(item) {
    var nearbyArea = $('#nearbyArea');
    // URL retrieved from Foursquare API
    var begUrl = 'https://api.foursquare.com/v2/venues/explore?near=';
    var artsOnly = '&section=arts';
    var endUrl = '&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170130'

    var fsUrl = begUrl + item + artsOnly + endUrl;

    // Function to get the list display under the title
    $.getJSON(fsUrl, function (data) {
        var allvenues = data.response.groups[0].items;
        for (var i = 0; i < 6; i++) {
            var onevenue = allvenues[i];
            nearbyArea.append('<p id="venueli">' + onevenue.venue.name + '</p>');
        };
        // If the URL does not work, an error message will appear    
    }).error(function (e) {
        $("#errormessage").text('Venues not available!');
    });
    return false;
};
$('#neighbourghood').append(artyMap);

/* Reset button removes the art places shown.*/

$("#deleteli").click(function () {
    $("p").each(function(){
        $(this).remove();
    });
    $("#errormessage").remove();
});