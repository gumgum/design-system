module.exports = function ($) {
    const NAV_SELECTOR = 'data-gds-nav',
        NAVBUTTON_SELECTOR = 'data-gds-nav-button',
        NAVTYPE_SELECTOR = 'data-gds-nav-type',
        NAVITEM_SELECTOR = 'data-gds-nav-item',
        NAVCONTROLS_SELECTOR = 'data-gds-nav-controls',
        NAVCONTENTS_SELECTOR = 'data-gds-nav-contents',
        NAVCONTENT_SELECTOR = 'data-gds-nav-content',
        TAB_ACTIVE_CLASS = 'gds-nav-tabs__list-item--active',
        PILL_ACTIVE_CLASS = 'gds-nav-pills__list-item--active',
        NAVCLICK_NAMESPACE = 'click.gds-nav';

    let $document = $(document),
        nav = {
            load: function () {
                $document.on(NAVCLICK_NAMESPACE, '[' + NAVBUTTON_SELECTOR + ']', nav.handleClick);
            },
            handleClick: function (e) {
                let $button = $(e.currentTarget),
                    buttonId = $button.attr(NAVBUTTON_SELECTOR),
                    navType = $button.attr(NAVTYPE_SELECTOR),
                    $item = $button.parents('[' + NAVITEM_SELECTOR + ']'),
                    $nav = $button.parents('[' + NAV_SELECTOR + ']'),
                    navId = $nav.attr(NAV_SELECTOR),
                    activeClass = navType === 'tab' ? TAB_ACTIVE_CLASS : PILL_ACTIVE_CLASS,
                    activeNav = $nav.find('.' + activeClass);
                if (activeNav.length > 0) {
                    nav.toggleNavItem(activeNav, activeClass);
                }
                nav.toggleNavItem($item, activeClass);
                nav.showContent(navId, buttonId);
            },
            toggleNavItem: function (element, activeClass) {
                element.toggleClass(activeClass);
            },
            showContent: function (navId, contentId) {
                let $navContents = $('[' + NAVCONTENTS_SELECTOR + '="' + navId + '"]'),
                    $allContent = $navContents.find('[' + NAVCONTENT_SELECTOR + ']'),
                    $newContent = $navContents.find('[' + NAVCONTENT_SELECTOR + '="' + contentId + '"]');
                $($allContent).attr('class', '-none');
                $($newContent).attr('class', '-block');
            }
        };
    return nav;
};
