$(document).ready(function() {

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#navigation').addClass('bg-white shadow')
            $('.nav-item').removeClass('text-white')
            $('.navbar-brand').removeClass('text-white')
        } else {
            $(window).bind("resize", function() {
                if ($(this).width() < 980) {
                    $('#navigation').addClass('bg-white shadow')
                    $('.nav-item').removeClass('text-white')
                    $('.navbar-brand').removeClass('text-white')
                } else {
                    $("#navigation").removeClass("bg-white shadow");
                    $('.nav-item').addClass('text-white')
                    $('.navbar-brand').addClass('text-white')
                }
            }).trigger('resize');
        }
    })



    mybutton = document.getElementById("scroll-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }


    $('#scroll-top').click(function() {
        document.documentElement.scrollTop = 0;
    })

    $(window).on('load', function() {
        document.documentElement.scrollTop = 0
    })




}); //end code