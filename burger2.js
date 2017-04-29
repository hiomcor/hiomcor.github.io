
var $Nav = $("sidenav");

$(document).ready(function() {
    $('img.burger').click(function() {
        if ($($Nav).css('width') != "25vw") {
            $($Nav).css('width', '25vw');
        }
        else {
            $($Nav).css('width', '0');
        }
    });
});
