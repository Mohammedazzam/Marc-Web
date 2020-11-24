var menuList = document.getElementById("menuList");
menuList.style.maxHeight="0px"
function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="140px";
    }
    else{
        menuList.style.maxHeight="0px";
    }
}

$(function () {

    "use strict";

        // scroll To section from i 

        $('nav ul li a,.header .go i').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('goto')).offset().top
            }, 1000);
            
        });


            
        // scroll top
        $(window).scroll(function () {
            var scrolltop = $('.scroll-top');
            if ($(window).scrollTop() > 500) {
                if (scrolltop.is(':hidden')) {
                    scrolltop.fadeIn(400);
                }
            } else {
                scrolltop.fadeOut(400);
            }
        });
        
        $('.scroll-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });

            
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.about-us .text-container h2').delay(200).fadeIn(100).animate({paddingTop : 0}, 700);
            $('.about-us .text-container p').delay(500).fadeIn(100).animate({paddingTop : 20}, 700);
            $('.about-us .photo-container').delay(700).animate({opacity : 1}, 700);
        }
        if ($(window).scrollTop() > 1500) {
            $('.footer .back-img').delay(500).animate({opacity : 1}, 700);
            $('.footer .front-img').delay(800).animate({opacity : 1}, 800);
        }
        
    });
});