module.exports = function ($) {
    const EVT_TOGGLE = 'click.gds-bubble-toggle',
        EVT_IGNORE = 'click.gds-bubble-ignore',
        EVT_CLOSE = 'click.gds-bubble-close',
        SELECTOR_BUTTON = 'data-gds-bubble-button',
        SELECTOR_ACTIVE = 'data-gds-active-class',
        CLASS_BUBBLE_OPEN = 'gds-bubble__menu--menu-open';

    let $document = $(document),
        loaded = false,
        $activeButton = null,
        $activeMenu = null,
        bubble = {
            load: function () {
                if (loaded === false) {
                    $document.on(EVT_TOGGLE, '[' + SELECTOR_BUTTON + ']', bubble.handleButtonClick);
                }
            },
            handleButtonClick: function (event) {
                event.stopPropagation();
                let el = event.currentTarget,
                    $el = $(el),
                    // the menu should be indicated as a selector in the attribute, can be an id or class or any complex selector
                    $menu = $($el.attr(SELECTOR_BUTTON));

                // There is an active bubble menu, no matter if its the same we just clicked it, close it.
                if ($activeButton !== null) {
                    let clickOnSame = ($activeButton[0] === el);
                    // Shutdown active
                    bubble.shutdownActive(event);
                    // Clicked again in the same button just return;
                    if (clickOnSame) {
                        return true;
                    }
                }
                // We need to open a different menu
                bubble.activateButton($el);
                bubble.openMenu($menu, $el);
                // Refresh references, they always go in pair
                $activeButton = $el;
                $activeMenu = $menu;
                return true;
            },
            shutdownActive: function (evt) {
                evt.stopPropagation();
                if ($activeButton !== null) {
                    bubble.closeMenu($activeMenu);
                    bubble.deactivateButton($activeButton);
                    $activeButton = null;
                    $activeMenu = null;
                }
                return true;
            },
            activateButton: function ($btn) {
                $btn.addClass($btn.attr(SELECTOR_ACTIVE));
            },
            deactivateButton: function ($btn) {
                $btn.removeClass($btn.attr(SELECTOR_ACTIVE));
            },
            closeMenu: function ($menu) {
                $menu.removeClass(CLASS_BUBBLE_OPEN);
                $document.off(EVT_IGNORE).off(EVT_CLOSE);
            },
            openMenu: function ($menu, $btn, btnClass) {
                // Shows menu
                $menu.addClass(CLASS_BUBBLE_OPEN);
                // Catches any random click on the open menu top element, and cancels it, so it doesn't get closed
                $document
                    .on(EVT_IGNORE, $btn.attr(SELECTOR_BUTTON), function (evt) {
                        if ($(evt.target).attr('data-gds-bubble-closer') != undefined || $(evt.target).parents().attr('data-gds-bubble-closer') != undefined) {
                            bubble.shutdownActive(evt);
                        }
                        evt.stopPropagation();
                    })
                    .on(EVT_CLOSE, function (evt) {
                        bubble.shutdownActive(evt);
                    });
            }
        };

    return bubble;
};
