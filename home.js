$(document).ready(function(){
    setBindings();
    parallax();
});

function setBindings(){
    $('.nav-container a').click(function(e){
        e.preventDefault();
        var tarID = (e.currentTarget.id).split("-").pop();

        $('html body').animate({
            scrollTop: $("#" + tarID).offset().top
        }, 1000);
    })
}

function parallax(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        console.log(wScroll)

        if (wScroll < 700){
            $('.right').css({'transform' : 'translate3d(0px, 0px, 0px)'});
        }else if (wScroll >= 700 && wScroll <1800){
            $('.right').css({'transform' : 'translate3d(0px, -'+ ((wScroll - 700) / 3.15) +'px, 0px)'});
            $('#news img').css({'transform' : 'translate3d(0px, 0px, 0px)'});
        }else if (wScroll >= 1800 && wScroll < 2750){
            $('#news img').css({'transform' : 'translate3d(0px, -'+ ((wScroll - 1800) / 1.61) +'px, 0px)'});
        }
    });
}
