$(document).ready(function () {

    console.log("<!--Copyright: © Petar Nikolovski -->");
    console.log("Contact: https://www.facebook.com/profile.php?id=100000364560836");

    //data toggle for flag icons
    $('[data-toggle="tooltip"]').tooltip();


    //services section (changing content on click)
    $('.active-service').css('display', 'flex');
    $('.services-row span').click(function () {
        let $this = $(this);
        let id = $this.attr('class');
        let contentWithClass = $('.content').is("." + id); //checking if content have "ID" class

        if (contentWithClass) {
            $('.content').removeClass('active-service d-flex align-items-center')
            $('.content').hide();
            $('.services-row span').removeClass('active-service d-flex align-items-center');
            $('.' + id).addClass('active-service');
            $('.' + id).css("display", "flex").css('align-items', 'center')
                .hide()
                .fadeIn();
        }
    });

    //gif before pages loaded
    setTimeout(function () {
        $('.preloader').fadeOut();
        $('.full-content').css('visibility', 'unset');
    }, 2500);


    var btn = $('#button');


    //button back to top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    //scroll to top
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });


});