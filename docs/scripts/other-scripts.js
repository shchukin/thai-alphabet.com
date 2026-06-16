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



    /* Settings Dropdown */

    const $settings = $('.settings');

    $('.settings__handler').on('click', function (){
        $settings.toggleClass('settings--expanded');
    });

    /* hide by cross click */
    $('.settings__close').on('click', function () {
        $settings.removeClass('settings--expanded');
    });

    /* hide settings by overlay click ( goo.gl/SJG2Hw ) */
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.settings').length) {
            $settings.removeClass('settings--expanded');
        }
    });

    /* hide settings by Esc press */
    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $settings.removeClass('settings--expanded');
        }
    });




    /* typeface Dropdown */

    const $typeface = $('.typeface');

    $('.typeface__handler').on('click', function (){
        $typeface.toggleClass('typeface--expanded');
    });

    /* hide by cross click */
    $('.typeface__close').on('click', function () {
        $typeface.removeClass('typeface--expanded');
    });

    /* hide typeface by overlay click ( goo.gl/SJG2Hw ) */
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.typeface').length) {
            $typeface.removeClass('typeface--expanded');
        }
    });

    /* hide typeface by Esc press */
    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $typeface.removeClass('typeface--expanded');
        }
    });




    /* Fonts Dropdown */

    const $information = $('.information');


    $('.information__handler').on('click', function (){
        $information.toggleClass('information--expanded');
    });

    /* hide by cross click */
    $('.information__close').on('click', function () {
        $information.removeClass('information--expanded');
    });

    /* hide information by overlay click ( goo.gl/SJG2Hw ) */
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.information').length) {
            $information.removeClass('information--expanded');
        }
    });

    /* hide information by Esc press */
    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) {
            $information.removeClass('information--expanded');
        }
    });


})(jQuery);
