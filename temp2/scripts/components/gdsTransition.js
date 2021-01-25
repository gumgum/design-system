module.exports = function ($) {
    const transition = {
        load: function () {
            $.fn.transitionDemo = function () {
                $(this).each(function (index, element) {
                    startDemo($(element));
                });

                function startDemo(element) {
                    element.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                        element.off('transitionend webkitTransitionEnd oTransitionEnd');
                        startDemo(element);
                    });
                    setTimeout(function () {
                        element.toggleClass('shifted');
                    }, 500);
                }
            };
        }
    };

    return transition;
};
