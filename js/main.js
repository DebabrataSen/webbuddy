
$(document).ready(function () {
    //Get Current Year
    $('#year').text(new Date().getFullYear());

    //Go top With Smooth Scroll
    let backtop = $('.back-top')
    backtop.on('click', function () {
        $('html, body').animate({ scrollTop: $('#home').offset().top }, 1500);
    });

    //Bootstrap Carousel Slider Config in index page
    $('.carousel').carousel({
        interval: 4000,
        pause: 'hover',
        touch: true,
        keyboard: true
    });

    //Magnific popup init index page
    $('.view').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
    });

    // Auto play modal video in index page
    $(".video").click(function () {
        let theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });

});


