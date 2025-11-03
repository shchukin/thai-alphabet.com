(function ($) {

    $('.information__handler').on('click', function (){
        $('html').toggleClass('information-expanded');
    });


    /* hide by cross click */

    $('.information__close').on('click', function () {
        $('html').removeClass('information-expanded');
    });


    /* hide information by overlay click ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.information, .cogwheel').length) {
            $('html').removeClass('information-expanded');
        }
    });


    /* hide information by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('information-expanded');
        }
    });


})(jQuery);
