import { brap } from './helpers';

module.exports = function ($) {
    const REFINERY_ATTRIBUTE = 'data-gds-refinery',
        REFINERY_BUTTON_ATTRIBUTE = 'data-gds-refinery-tab',
        REFINERY_TOGGLE_ATTRIBUTE = 'data-gds-toggle-filters',
        REFINERY_OPEN_CLASS = 'gds-refinery--menu-open',
        REFINERY_DISABLE_CLASS = 'gds-refinery--menu-disabled',
        REFINERY_CLICK_EVENT = `click.${REFINERY_BUTTON_ATTRIBUTE}`,
        REFINERY_TOGGLE_EVENT = `change.${REFINERY_TOGGLE_ATTRIBUTE}`;

    let $document = $(document),
        refinery = {
            load: function () {
                $document
                    .on(REFINERY_CLICK_EVENT, brap(REFINERY_BUTTON_ATTRIBUTE), refinery.handleClick)
                    .on(REFINERY_TOGGLE_EVENT, brap(REFINERY_TOGGLE_ATTRIBUTE), refinery.handleToggle);
            },
            handleClick: function (e) {
                let $component = $(e.currentTarget).parents(brap(REFINERY_ATTRIBUTE));
                $component.toggleClass(REFINERY_OPEN_CLASS);
            },
            handleToggle: function (e) {
                let $compopnent = $(e.currentTarget).parents(brap(REFINERY_ATTRIBUTE)),
                    isChecked = this.checked;
                isChecked ? $compopnent.addClass(REFINERY_DISABLE_CLASS) : $compopnent.removeClass(REFINERY_DISABLE_CLASS);
            }
        };
    return refinery;
};