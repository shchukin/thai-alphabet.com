(function ($) {

    $('.settings__handler').on('click', function (){
        $('html').toggleClass('settings-expanded');
    });


    /* hide by cross click */

    $('.settings__close').on('click', function () {
        $('html').removeClass('settings-expanded');
    });


    /* hide settings by overlay click ( goo.gl/SJG2Hw ) */

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.settings, .cogwheel').length) {
            $('html').removeClass('settings-expanded');
        }
    });


    /* hide settings by Esc press */

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('html').removeClass('settings-expanded');
        }
    });


})(jQuery);
