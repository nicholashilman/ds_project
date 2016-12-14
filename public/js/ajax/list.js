//API Calls with AJAX
    
$(function (){

    var $firstt = $('#firstt');         // first
    var $lastt  = $('#lastt');          // lastt
    var $phonee = $('#phonee');         // phonee
    var $adress = $('#adress');         // adress
    var $titlee = $('#titlee');         // titlee
    var $emaill = $('#emaill');         // emaill

    $('#submit-spot').on('submit', function(ev) {
        ev.preventDefault();

        var new_spot = {
            first:$firstt.val(),
            last:$lastt.val(),
            phone:$phonee.val(),
            adress:$adress.val(),
            title:$titlee.val(),            
            email:$emaill.val(),
        };  

        $.ajax({
            type: 'POST',
            url: 'http://35.165.226.154:3030/api/iteam',
            data: new_spot,
            success: function(newSpot){
                window.location.replace("/buy");
            },
            error: function() {
                alert('error saving order');
            }
        });

    });

});
