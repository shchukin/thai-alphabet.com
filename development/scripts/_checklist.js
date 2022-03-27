(function ($) {

    /* 1. Жонглирование классами видимости */
    function display($this) {
        if ($this.is(':checked') || $this.is(':indeterminate')) {
            $('html').addClass('display-' + $this.val());
        } else {
            $('html').removeClass('display-' + $this.val());
        }
    }

    $('.display').on('change', function () {
        display($(this));
    });


    /* Перепроверяем все чекбоксы и актуализируем соответствующие классы.
     * Это нужно делать при document.ready
     * Ещё это нужно делать когда чекбоксы чекаются жаба-скриптом, поскольку
     * .prop() не вызывает событие onChange.
     */
    function displayAll() {
        $('.display').each(function () {
            display($(this));
        });
    }


    /* 2. Непосредственно сам чеклист */

    /* Немного адаптированный вот этот сэмпл:
     * https://codepen.io/chriscoyier/pen/JYyXjX
     * (в некоторых местах удвоенны .parent() и .children()
     */

    $('.checklist .choice__widget').change(function (e) {

        var isChecked = $(this).prop("checked");
        var $checklistItem = $(this).parent('.choice').parent('.checklist__item');

        /* Сразу чекаем всех потомков (ну или анчекаем, в общем переводим их все в тот же статус, как чекбокс на который только что кликнули) */
        $checklistItem.find('.choice__widget').prop({
            indeterminate: false,
            checked: isChecked
        });

        /* Поскольку .prop не вызывает onChange надо перепроверить все чекбоксы и актуализировать классы */
        displayAll()

        /* возвращаемся к алгоритму */
        function checkSiblings($checklistItem) {

            var parent = $checklistItem.parent('.checklist').parent('.checklist__item'),
                all = true;

            $checklistItem.siblings().each(function () {
                let returnValue = all = ($(this).children().children('.choice__widget').prop("checked") === isChecked);
                return returnValue;
            });

            if (all && isChecked) {

                parent.children().children('.choice__widget').prop({
                    indeterminate: false,
                    checked: isChecked
                });

                /* Поскольку .prop не вызывает onChange надо перепроверить все чекбоксы и актуализировать классы */
                displayAll()

                /* возвращаемся к алгоритму */
                if ( parent.children().children('.choice__widget').length ) {
                    checkSiblings(parent);
                }

            } else if (all && !isChecked) {

                parent.children('.choice').children('.choice__widget').prop("checked", isChecked);
                parent.children('.choice').children('.choice__widget').prop("indeterminate", (parent.find('.choice__widget:checked').length > 0));

                /* Поскольку .prop не вызывает onChange надо перепроверить все чекбоксы и актуализировать классы */
                displayAll()

                /* возвращаемся к алгоритму */
                if ( parent.children().children('.choice__widget').length ) {
                    checkSiblings(parent);
                }

            } else {

                $checklistItem.parents(".checklist__item").children('.choice').children('.choice__widget').prop({
                    indeterminate: true,
                    checked: false
                });

                /* Поскольку .prop не вызывает onChange надо перепроверить все чекбоксы и актуализировать классы */
                displayAll()

            }

        }

        checkSiblings($checklistItem);
    });

})(jQuery);
