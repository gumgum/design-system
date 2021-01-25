module.exports = function ($) {
    const INPUT_SELECTOR = '[data-gds-input]',
        FORMGROUP_SELECTOR = '[data-gds-form-group]',
        INPUT_ACTIVE_CLASS = 'gds-form-group--active',
        FOCUSIN_NAMESPACE = 'focusin.gds-input',
        FOCUSOUT_NAMESPACE = 'focusout.gds-input';

    let $document = $(document),
        inputs = {
            load: function () {
                $document.on(FOCUSIN_NAMESPACE, INPUT_SELECTOR, inputs.handleFocus);
                $document.on(FOCUSOUT_NAMESPACE, INPUT_SELECTOR, inputs.handleBlur);
            },
            handleBlur: function (e) {
                let $me = $(e.currentTarget);
                $me.parents(FORMGROUP_SELECTOR).removeClass(INPUT_ACTIVE_CLASS);

            },
            handleFocus: function (e) {
                let $me = $(e.currentTarget);
                $me.parents(FORMGROUP_SELECTOR).addClass(INPUT_ACTIVE_CLASS);
            }
        };
    return inputs;
};
