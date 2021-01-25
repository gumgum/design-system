module.exports = function ($) {
    let avatar = {
        load: function () {
            $('body').on('click', '[data-gds-avatar]', function () {
                $(this).toggleClass('gds-avatar--menu-open');
            });
        }
    };

    return avatar;
};
