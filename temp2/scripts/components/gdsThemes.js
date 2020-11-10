module.exports = function ($) {
    const themes = {
        load: function () {
            let themes = [];

            $('[data-gds-theme]').each(function () {
                themes.push($(this).attr('data-gds-theme'));
            });

            $('body').on('click', '[data-gds-theme]', function () {
                let tn = $(this).attr('data-gds-theme');

                for (let i in themes) {
                    if (themes[i] != tn) {
                        $('body').removeClass(themes[i]);
                    }
                }
                $('body').addClass(tn);
            });
        }
    };

    return themes;
};
