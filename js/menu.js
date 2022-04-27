//  --------------- select menu ---------------

$(document).ready(function() {
    $('#select').css('color','olive');
    $('#select').change(function() {
       var current = $('#select').val();
       if (current != 'null') {
           $('#select').css('color','red');
       } else {
           $('#select').css('color','olive');
       }
    }); 
 });