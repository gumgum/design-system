module.exports = function ($) {

    const SLIDENAV_SELECTOR = '[data-gds-slide-nav]',
        SLIDENAV_BUTTON_SELECTOR = '[data-gds-slide-nav-button]',
        SLIDENAV_PAGENAME_SELECTOR = '[data-gds-page-name]',
        SLIDENAV_CLOSERITEM_SELECTOR = '[data-gds-nav-closer]',
        EXPANDABLE_LIST_SELECTOR = '[data-gds-expand-list]',
        EXPANDABLE_LINK_SELECTOR = '[data-gds-expandable]',
        SLIDE_CONTENT_SELECTOR = '.gds-slide-content', //should be an attribute, but too many in the wild implemnentations don't have it.
        SLIDE_OUT_CLASS = 'gds-slide-out',
        MENU_ACTIVE_CLASS = 'gds-page-header__menu--open',
        LIST_EXPANDED_CLASS = 'gds-slide-nav__list--expanded',
        LINK_EXPANDED_CLASS = 'gds-slide-nav__link--expanded',
        FOCUSCHECK_SELECTORS = 'input[type="text"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="password"]:focus, textarea:focus',
        KEYBOARD_OPEN_SHORTCUT = 65, // "a" button
        KEYBOARD_CLOSE_SHORTCUT = 27,
        NAVCLICK_NAMESPACE = 'click.gds-slide-nav',
        EXPANDCLICK_NAMESPACE = 'click.gds-slide-expand',
        CLICKOUTSIDE_NAMESPACE = 'click.gds-slide-close',
        HOTKEYPRESS_NAMESPACE = 'keydown.gds-slide-nav';


    let loaded = false,
        menuOpen = false,
        pageName = '',
        $slideElement,
        $slideButton,
        $pageNameElement,
        $document = $(document),
        slideNav = {
            load: function () {
                if (loaded === false) {
                    loaded = true;
                    $slideElement = $(SLIDENAV_SELECTOR);
                    $slideButton = $(SLIDENAV_BUTTON_SELECTOR);
                    $pageNameElement = $(SLIDENAV_PAGENAME_SELECTOR);

                    $document.on(NAVCLICK_NAMESPACE, SLIDENAV_BUTTON_SELECTOR, slideNav.toggleMenu) //Hamburger button menu toggle
                        .on(NAVCLICK_NAMESPACE, SLIDENAV_CLOSERITEM_SELECTOR, slideNav.closeMenu) //Click on list item that should close menu
                        .on(HOTKEYPRESS_NAMESPACE, slideNav.handleHotkeyPress) //Hotkey Listeners
                        .on(EXPANDCLICK_NAMESPACE, EXPANDABLE_LINK_SELECTOR, slideNav.handleNavLinkClick); //Expand List links
                }
            },
            toggleMenu: function (e) {
                e.stopPropagation();
                $slideButton.toggleClass(MENU_ACTIVE_CLASS);
                if (menuOpen) {
                    slideNav.closeMenu();
                } else {
                    slideNav.openMenu();
                }
            },
            openMenu: function () {
                $slideElement.addClass(SLIDE_OUT_CLASS);
                pageName = $pageNameElement.text();
                $pageNameElement.text('Close Menu');
                $document.on(CLICKOUTSIDE_NAMESPACE, SLIDE_CONTENT_SELECTOR, slideNav.closeMenu);
                menuOpen = !menuOpen;
            },
            closeMenu: function () {
                $slideElement.removeClass(SLIDE_OUT_CLASS);
                $pageNameElement.text(pageName);
                $document.off(CLICKOUTSIDE_NAMESPACE);
                menuOpen = !menuOpen;
            },
            handleHotkeyPress: function (e) {
                let $elm = $(FOCUSCHECK_SELECTORS);
                if ($elm.length === 0 && e.which === KEYBOARD_OPEN_SHORTCUT) {
                    slideNav.toggleMenu(e);
                }
                if (menuOpen && $elm.length === 0 && e.which == KEYBOARD_CLOSE_SHORTCUT) {
                    slideNav.toggleMenu(e);
                }
            },
            handleNavLinkClick: function (e) {
                let $me = $(e.currentTarget);
                if ($me.hasClass(LINK_EXPANDED_CLASS)) {
                    $me.removeClass(LINK_EXPANDED_CLASS)
                        .siblings(EXPANDABLE_LIST_SELECTOR).removeClass(LIST_EXPANDED_CLASS);
                } else {
                    $me.parent().siblings().find(EXPANDABLE_LIST_SELECTOR).removeClass(LIST_EXPANDED_CLASS)
                        .parent().find(EXPANDABLE_LINK_SELECTOR).removeClass(LINK_EXPANDED_CLASS);
                    $me.addClass(LINK_EXPANDED_CLASS)
                        .siblings(EXPANDABLE_LIST_SELECTOR).addClass(LIST_EXPANDED_CLASS);
                }
            }
        };
    return slideNav;
};
