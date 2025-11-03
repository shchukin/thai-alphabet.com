(function ($) {
    
    const $html = $('html');


    /* Bubbles */

    $('.bubble-handler').on('click', function () {
        const $target = $(this).parents('.bubble-context').find('.bubble');
        $('.bubble--visible').not($target).removeClass('bubble--visible'); /* закрываем все остальные */
        $target.toggleClass('bubble--visible');
    });

    /* hide bubble by overlay click ( goo.gl/SJG2Hw ) */
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.bubble, .bubble-handler').length) {
            $('.bubble--visible').removeClass('bubble--visible');
        }
    });

    /* hide popup by Esc press */
    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $('.bubble--visible').removeClass('bubble--visible');
        }
    });



    /* Settings */

    $('.settings__handler').on('click', function (){
        $html.toggleClass('settings-expanded');
    });

    /* hide by cross click */
    $('.settings__close').on('click', function () {
        $html.removeClass('settings-expanded');
    });

    /* hide settings by overlay click ( goo.gl/SJG2Hw ) */
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.settings, .cogwheel').length) {
            $html.removeClass('settings-expanded');
        }
    });

    /* hide settings by Esc press */
    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $html.removeClass('settings-expanded');
        }
    });




    /* Information */

    $('.information__handler').on('click', function (){
        $html.toggleClass('information-expanded');
    });

    /* hide by cross click */
    $('.information__close').on('click', function () {
        $html.removeClass('information-expanded');
    });

    /* hide information by overlay click ( goo.gl/SJG2Hw ) */
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.information, .cogwheel').length) {
            $html.removeClass('information-expanded');
        }
    });

    /* hide information by Esc press */
    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $html.removeClass('information-expanded');
        }
    });


})(jQuery);
