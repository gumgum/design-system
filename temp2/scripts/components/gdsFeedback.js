import { brap } from './helpers';

module.exports = function ($) {
    const FEEDBACK = 'data-gds-feedback',
        FEEDBACK_BTN_ATTRIBUTE = 'data-gds-feedback-button',
        EXPANDER_BUTTON_ATTRIBUTE = 'data-gds-feedback-expander-button',
        FEEDBACK_BUBBLE_MENU_ATTRIBUTE = 'data-gds-feedback-bubble-drawer',
        FEEDBACK_BUTTON_ACTIVE_CLASS = 'gds-feedback__drawer-item--active',
        EXPANDER_BUTTON_ACTIVE_CLASS = 'gds-feedback__expander--active',
        MENU_OPEN_CLASS = 'gds-feedback__drawer--open',
        BUTTON_CLICK_EVT = `click.${FEEDBACK_BTN_ATTRIBUTE}`,
        EXPANDER_BUTTON_CLICK_EVT = `click.${EXPANDER_BUTTON_ATTRIBUTE}`;

    let $document = $(document),
        feedback = {
            load: function () {
                $document
                    .on(BUTTON_CLICK_EVT, brap(FEEDBACK_BTN_ATTRIBUTE), feedback.handleButtonClick)
                    .on(EXPANDER_BUTTON_CLICK_EVT, brap(EXPANDER_BUTTON_ATTRIBUTE), feedback.handleExpanderClick);
            },
            handleButtonClick: function (e) {
                let $button = $(e.currentTarget),
                    $menu = $button.parents(brap(FEEDBACK_BUBBLE_MENU_ATTRIBUTE)),
                    $allButtons = $menu.find(`[${FEEDBACK_BTN_ATTRIBUTE}="toggle"]`),
                    $feedback = $menu.parents(brap(FEEDBACK)),
                    menuId = $menu.attr(FEEDBACK_BUBBLE_MENU_ATTRIBUTE);
            },
            handleExpanderClick: function (e) {
                e.preventDefault();

                let $button = $(e.currentTarget),
                    openMenuId = $button.attr(EXPANDER_BUTTON_ATTRIBUTE),
                    $menu = $button.parents(brap(FEEDBACK)).find(`[${FEEDBACK_BUBBLE_MENU_ATTRIBUTE}=${openMenuId}]`);

                // Deactivate the active expander button //
                $(brap(EXPANDER_BUTTON_ATTRIBUTE)).not($button).removeClass(EXPANDER_BUTTON_ACTIVE_CLASS);

                // Collapse expanded menus //
                $(`.${MENU_OPEN_CLASS}`).not($menu).removeClass(MENU_OPEN_CLASS);

                // Activate clicked button
                $button.toggleClass(EXPANDER_BUTTON_ACTIVE_CLASS);

                // Expand Menu
                $menu.hasClass(MENU_OPEN_CLASS) ? $menu.removeClass(MENU_OPEN_CLASS) : $menu.addClass(MENU_OPEN_CLASS);
            }
        };

    return feedback;
};
