// Foursquare API 
/*
client ID CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM
client sc QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC
YYYYMMDD
URL :  https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170125

*/

function loadData() {
    
    var $venueHeader = $('#venueHeader');
    var $venueTitle = $('#venuetitle');
    
    //$venueTitle.text('');
    
    var place = $('#newplace').val();
    
    var begUrl = 'https://api.foursquare.com/v2/venues/explore?near=';
    var artsOnly = '&section=arts';
    var sightsOnly = '&section=sights';
    var coffeeOnly = '&section=coffee';
    var endUrl = '&client_id=CBIVLNR1NJKAFCBVDSOPVUTNX4WMB3CQMK11NPLWFFIBMQUM&client_secret=QKZM2PG05VO55QNGVUUOBXITOURPII5NPDXY51U3S3VL22LC&v=20170130'
    
    var fsUrl = begUrl+place+artsOnly+endUrl;
    $.getJSON(fsUrl, function(data){
        $venueHeader.text('Once there, go here: ');
        allvenues = data.response.groups[0].items;
        console.log(allvenues);
        for (var i = 0; i < 5; i++){
            var onevenue = allvenues[i];
            $venueHeader.append('<li>'+onevenue.venue.name+'</li>');
        };
    }).error(function(e){$venueHeader.text('Venues not available!');
                        });
    
   
   return false;
    
};
$('#venuesask').submit(loadData);
    
   