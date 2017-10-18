
// Collapse the navbar when page is scrolled //Коли сторінка прокручується донизу,то добавляється новий клас navbar-shrink, який має інший стиль
(function ($) {

    $("#scrolltop").scroll(function () {
        $("#scroll icon").animate({
            color: white
        }, 1500);
    });

    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }

        // Scroll to the top of page
        // if ($("#page-top").scrollTop() > 500) {
        //     $('.scrolltop:hidden').stop(true, true).fadeIn(2000); //якщо опуститися на 
        //     //більше ніж 500px,тоді scrolltop:hidden поступово з'являється, а якщо навпаки,то зникає
        // } else {
        //     $('.scrolltop').stop(true, true).fadeOut(1600);
        // }
    });
    $(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $("#page-top").offset().top }, "slow"); return false }) })

    // Scroll to the top of page
    var fixed = false;
    $(document).scroll(function () {
        if ($(this).scrollTop() > 500) {
            if (!fixed) {
                fixed = true;
                $('#to-top').show("slow", function () {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function () {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'none'
                    });
                });
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked//Коли нажимаємо на силку,то .navbar-collapse згортається
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // //the first way to use smooth scroling
    // $('.navbar-nav').localScroll();

    //the second way to use smooth scrolling
    //Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // Activate scrollspy to add active class to navbar items on scroll //Коли гортає донизу сторінку,то активні силки в навбарі підсвічуюються
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Scroll reveal calls ///Анімація-символи,картинки,значки з'являються поступово
    // https://github.com/jlmakes/scrollreveal
    window.sr = ScrollReveal();
    sr.reveal('.service-item', {
        duration: 900, //час, на протязі того як він з'являється
        scale: 0.8, // розмір елемента пiл час того як він з'являється
        distance: '20px', // відстань, яку проходить елемент під час того як з'являється
        opacity: 0.3
        //reset: false // оновлення кожного разу,коли елементи відочні
    }, 200); // послідовність-час, за який з'являється кожен наступний елемент
})
    // Using multiple unit types within one animation.
    (jQuery);