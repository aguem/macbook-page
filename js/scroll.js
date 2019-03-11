$(function () {

    $('.region').each(function (index) {
        $(this).delay(index * 1000).fadeIn(500);
    });

});