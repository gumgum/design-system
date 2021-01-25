module.exports = function ($) {
    const DROPDOWN_SELECTOR = 'data-gds-dropdown',
        DROPDOWN_BUTTON_SELECTOR = 'data-gds-dropdown-button',
        DROPDOWN_BUTTON_NAMESPACE = 'click.' + DROPDOWN_BUTTON_SELECTOR,
        DROPDOWN_NESTEDBUTTON_SELECTOR = 'data-gds-nested-dropdown',
        DROPDOWN_NESTEDBUTTON_NAMESPACE = 'click.' + DROPDOWN_NESTEDMENU_SELECTOR,
        DROPDOWN_NESTEDMENU_SELECTOR = 'data-gds-nested-menu',
        DROPDOWN_NESTEDMENU_NAMESPACE = 'click.' + DROPDOWN_NESTEDMENU_SELECTOR,
        DOCUMENT_CLICK_NAMESPACE = 'click.closeDropdown',
        INNER_ELEMENTS = '.gds-multi-select__menu-link',
        BUTTON_ACTIVE_CLASS = 'gds-button-dropdown--active',
        MENU_ACTIVE_CLASS = 'gds-multi-select__menu-link--active';

    let $document = $(document),
        $openMenu = null,
        buttonDropdown = {
            load: function () {
                $document.on(DROPDOWN_BUTTON_NAMESPACE, '[' + DROPDOWN_BUTTON_SELECTOR + ']', buttonDropdown.handleButtonClick)
                    .on(DROPDOWN_NESTEDBUTTON_NAMESPACE, '[' + DROPDOWN_NESTEDBUTTON_SELECTOR + ']', buttonDropdown.handleMenuClick)
                    .on(DROPDOWN_NESTEDMENU_NAMESPACE, '[' + DROPDOWN_NESTEDMENU_SELECTOR + ']', buttonDropdown.stopPropagate)
                    .on(DROPDOWN_NESTEDMENU_NAMESPACE, INNER_ELEMENTS, buttonDropdown.stopPropagate);
            },
            handleButtonClick: function (e) {
                buttonDropdown.stopPropagate(e);
                buttonDropdown.closeAllMenus();
                if ($openMenu == null || !$openMenu.is($(e.currentTarget).parents('[' + DROPDOWN_SELECTOR + ']'))) {
                    $openMenu = $(e.currentTarget).parents('[' + DROPDOWN_SELECTOR + ']');
                    $document.on(DOCUMENT_CLICK_NAMESPACE, buttonDropdown.handleClickOutside);
                    buttonDropdown.toggleMenu($openMenu);
                } else {
                    $openMenu = null;
                }
            },
            toggleMenu: function ($element) {
                $element.toggleClass(BUTTON_ACTIVE_CLASS);
            },
            closeAllMenus: function () {
                $document.off(DOCUMENT_CLICK_NAMESPACE);
                $('[' + DROPDOWN_BUTTON_SELECTOR + ']').parents('[' + DROPDOWN_SELECTOR + ']').removeClass(BUTTON_ACTIVE_CLASS);
            },
            handleMenuClick: function (e) {
                buttonDropdown.stopPropagate(e);
                $(e.currentTarget).toggleClass(MENU_ACTIVE_CLASS);
            },
            handleClickOutside: function () {
                $document.off(DOCUMENT_CLICK_NAMESPACE);
                buttonDropdown.toggleMenu($openMenu);
                $openMenu = null;
            },
            stopPropagate: function (e) {
                e.stopPropagation();
            }
        };

    return buttonDropdown;
};
