$(function (){

    var $spotz = $('#spotz');

    $.ajax({
        type: 'GET',
        url: 'http://35.165.226.154:3030/api/iteam',
        success: function(spotz) {
            $.each(spotz, function(i, spot) {
                $spotz.append( '<div class="row parking-listings">' +
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.first + " " + spot.last + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.email + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.phone + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.title + '</h4>' + 
                                    '</div>'+
                                '</div>' );
            });
        },
        error: function() {
            alert('error loading spots');
        }
    });
});

$(function() {
    
    $('#submit-spot').on('submit', function(ev) {
        ev.preventDefault();

        $.ajax({
            type: 'DELETE',
            url: 'http://35.165.226.154/api_pending/spots_pending/584cb1ffef48dc47b93f2b30',
            success: function() {
                alert('suc');
            },
            error: function() {
                alert('fail');
            }
        });
    });
});