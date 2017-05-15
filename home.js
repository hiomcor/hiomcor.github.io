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

        if (wScroll < 1100){
            $('.right').css({'transform' : 'translate3d(0px, 0px, 0px)'});
        }else if (wScroll >= 1100 && wScroll <2200){
            $('.right').css({'transform' : 'translate3d(0px, -'+ ((wScroll - 1100) / 3.15) +'px, 0px)'});
            $('#news img').css({'transform' : 'translate3d(0px, 0px, 0px)'});
        }else if (wScroll >= 2200 && wScroll < 3150){
            $('#news img').css({'transform' : 'translate3d(0px, -'+ ((wScroll - 2200) / 1.61) +'px, 0px)'});
        }
    });
}
