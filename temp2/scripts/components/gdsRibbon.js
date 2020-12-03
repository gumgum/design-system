import { brap } from './helpers';

module.exports = function ($) {
    const RIBBON = 'data-gds-ribbon',
        RIBBON_BTN_ATTRIBUTE = 'data-gds-ribbon-button',
        EXPANDER_BUTTON_ATTRIBUTE = 'data-gds-ribbon-expander-button',
        EXPANDER_BASE_CLASS_ATTRIBUTE = 'data-gds-base-class',
        CALLBACK_CLASS_ATTRIBUTE = 'data-gds-callback-class',
        RIBBON_BUBBLE_MENU_ATTRIBUTE = 'data-gds-ribbon-bubble-menu',
        NO_ACTIVE_BUTTON_ATTRIBUTE = 'data-gds-ribbon-button-no-active',
        INPUT_ATTRIBUTE = 'data-gds-ribbon-input',
        RIBBON_BUTTON_ACTIVE_CLASS = 'gds-ribbon__button--active',
        MENU_OPEN_CLASS = 'gds-ribbon__bubble-menu--open',
        BUTTON_CLICK_EVT = `click.${RIBBON_BTN_ATTRIBUTE}`,
        EXPANDER_BUTTON_CLICK_EVT = `click.${EXPANDER_BUTTON_ATTRIBUTE}`,
        INPUT_CLICK = `click.${INPUT_ATTRIBUTE}`;

    let $document = $(document),
        ribbon = {
            load: function () {
                $document
                    .on(BUTTON_CLICK_EVT, brap(RIBBON_BTN_ATTRIBUTE), ribbon.handleButtonClick)
                    .on(EXPANDER_BUTTON_CLICK_EVT, brap(EXPANDER_BUTTON_ATTRIBUTE), ribbon.handleExpanderClick)
                    .on(INPUT_CLICK, brap(INPUT_ATTRIBUTE), ribbon.handleInputClick);
            },
            handleButtonClick: function (e) {
                let $button = $(e.currentTarget),
                    $menu = $button.parents(brap(RIBBON_BUBBLE_MENU_ATTRIBUTE)),
                    $allButtons = $menu.find(`[${RIBBON_BTN_ATTRIBUTE}="toggle"]`),
                    $ribbon = $menu.parents(brap(RIBBON)),
                    menuId = $menu.attr(RIBBON_BUBBLE_MENU_ATTRIBUTE);

                if ($button.attr(RIBBON_BTN_ATTRIBUTE) === 'toggle') {
                    // Deactivate other buttons //
                    $allButtons.removeClass(RIBBON_BUTTON_ACTIVE_CLASS);
                    // Activate this button //
                    $button.addClass(RIBBON_BUTTON_ACTIVE_CLASS);
                }

                // If a callback class attribute is specified, set the expander button icon class to that callback class attribute
                if ($button[0].hasAttribute(CALLBACK_CLASS_ATTRIBUTE)) {

                    let newClass = $button[0].getAttribute(CALLBACK_CLASS_ATTRIBUTE),
                        allPossibleClasses = $allButtons.map(function () {
                            return this.getAttribute(CALLBACK_CLASS_ATTRIBUTE);
                        }).get(),
                        $expanderButton = $ribbon.find(`[${EXPANDER_BUTTON_ATTRIBUTE}=${menuId}]`),
                        baseClass = $expanderButton.attr(EXPANDER_BASE_CLASS_ATTRIBUTE);

                    $expanderButton.find('i').removeClass(allPossibleClasses.join(' ')).addClass(`${baseClass} ${newClass}`);

                    setTimeout(function () {
                        $menu.removeClass(MENU_OPEN_CLASS);
                        $expanderButton.removeClass(RIBBON_BUTTON_ACTIVE_CLASS);
                    }, 200);
                }
            },
            handleExpanderClick: function (e) {
                e.preventDefault();

                let $button = $(e.currentTarget),
                    openMenuId = $button.attr(EXPANDER_BUTTON_ATTRIBUTE),
                    $menu = $button.parents(brap(RIBBON)).find(`[${RIBBON_BUBBLE_MENU_ATTRIBUTE}=${openMenuId}]`);

                // Deactivate the active expander button //
                $(brap(EXPANDER_BUTTON_ATTRIBUTE)).not($button).removeClass(RIBBON_BUTTON_ACTIVE_CLASS);

                // Collapse expanded menus //
                $(`.${MENU_OPEN_CLASS}`).not($menu).removeClass(MENU_OPEN_CLASS);

                // Activate clicked button
                $button.toggleClass(RIBBON_BUTTON_ACTIVE_CLASS);

                // Expand Menu
                $menu.hasClass(MENU_OPEN_CLASS) ? $menu.removeClass(MENU_OPEN_CLASS) : $menu.addClass(MENU_OPEN_CLASS);
            },
            handleInputClick: function (e) {
                e.preventDefault();
                let $input = $(e.currentTarget);
                $input.select();
            }
        };

    return ribbon;
};
