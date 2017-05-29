$(function(){
    menu();
    parallax();
    searchHover();
});


function menu(){
    var $menu = $('.menu');

    $('.burger').click(function(){

        $('html body').animate({
            scrollTop: 0
        }, 300);

        if ($('.outer-burger').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)'){

            $menu.css('height', '10rem');

        }else {

            if ($menu.height() === 0){
                $menu.css('height', '10rem');
            }else{
                $menu.css('height', '0rem');
            }
        }
    });
}


function parallax(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        if (wScroll > 80){
            $('.outer-burger').css({'transform' : 'translate3d(0px, 0px, 0px)'});
        }else {
            $('.outer-burger').css({'transform' : 'translate3d(0px, -80px, 0px)'});
        }
    });
}

function searchHover(){
    var $search = $(".input-container");

    $search.mouseenter(function(){
        console.log("enter!");
        $("input").css("width","11.08rem");
        $("input").css("padding-left","1.2rem");
    });

    $search.mouseleave(function(){
        console.log("leave!");
        if (!$("input").is(":focus")) {
            console.log("worked");
            $("input").css("width","0rem");
            $("input").css("padding-left","0rem");
        }
    });

    $search.focusout(function(){
        console.log("focus lost!");
        $('input').css("width","0rem");
        $("input").css("padding-left","0rem");
    });
}
