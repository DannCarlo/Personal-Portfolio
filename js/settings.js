$(document).ready(function () {

    $(window).load(function() {
        // FOR LOADING WEBPAGE ANIMATION
        $('.webpage-loading-overlay').fadeOut(200);
    });
    
    "use strict";
    try {

        /* ==========================================================================
         #PieChart For Skills Page
         ========================================================================== */

        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


        /* ==========================================================================
         #Carousel Popup For Portfolio Page
         ========================================================================== */
        $(".owl-carousel").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: false
        });

        /* ==========================================================================
         #Text Rotator 
         ========================================================================== */
        $('#rotate').rotaterator({fadeSpeed: 800, pauseSpeed: 800});

        /* ==========================================================================
         #Orientation change event
         ========================================================================== */
        $(window).on('orientationchange', function (event) {
            window.location.href = window.location.href;
        });

        //Videos
        $(".content-scroller").fitVids();



    } catch (ex) {
    }
});

/* ==========================================================================
 #Progress Bar For Skills Page
 ========================================================================== */

progressBar(80, $('#progressBar'));
progressBar(80, $('#progressBar2'));
progressBar(85, $('#progressBar3'));
progressBar(80, $('#progressBar4'));
progressBar(85, $('#progressBar5'));
progressBar(85, $('#progressBar6'));

progressBar(85, $('#progressBar7'));
progressBar(75, $('#progressBar8'));
progressBar(75, $('#progressBar9'));
progressBar(80, $('#progressBar10'));
progressBar(90, $('#progressBar11'));
progressBar(75, $('#progressBar12'));
progressBar(90, $('#progressBar13'));
progressBar(85, $('#progressBar14'));

progressBar(95, $('#progressBar15'));
progressBar(90, $('#progressBar16'));
progressBar(80, $('#progressBar17'));
progressBar(80, $('#progressBar18'));
progressBar(85, $('#progressBar19'));
progressBar(85, $('#progressBar20'));
progressBar(85, $('#progressBar21'));
progressBar(80, $('#progressBar22'));
progressBar(80, $('#progressBar23'));
progressBar(75, $('#progressBar24'));


$('.button-switch-container > button').click(function () {
    if (!$(this).hasClass('active')) {
        $('.button-switch-container > button').removeClass('active');
        if ($(this).hasClass('toggle-engineering')) {
            $('.skills-related.programming-related').fadeOut(200);
            $('.skills-related.engineering-related').fadeIn(700);
        }
        else {
            $('.skills-related.engineering-related').fadeOut(200);
            $('.skills-related.programming-related').fadeIn(700);
        }
        $(this).addClass('active');
    }
});

/* ==========================================================================
 #Mobile Menu
 ========================================================================== */

var $menu = $('#menu1'),
        $menulink = $('.menu-link');
$menulink.click(function () {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
});

$('nav#menu1 a').click(function () {
    $('#menu1').removeClass('active');
});



/* ==========================================================================
 #iPad,iPhone,iPod Keyboard issue with position fixed
 ========================================================================== */
var iPad = navigator.userAgent.toLowerCase().indexOf("ipad");
var iPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
var iPod = navigator.userAgent.toLowerCase().indexOf("ipod");
if (iPad > -1 || iPhone > -1 || iPod > -1)
{
    window.onscroll = function () {
        $('.totop-link').css('position', 'absolute');
        $('.totop-link').css('top', (window.pageYOffset + window.innerHeight - 39) + 'px');
    };
}



