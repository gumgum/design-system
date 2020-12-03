module.exports = function ($) {
    const PRODUCTBAR_SELECTOR = '.gds-page-header__product-bar',
        PRODUCTBAR_COLLAPSE_CLASS = 'gds-page-header__product-bar--collapsed';

    let $window = $(window),
        $productBar,
        throttleCount = 0,
        scrollThrottle = 20,
        scrollTimeout,
        pageHeader = {
            load: function () {
                $productBar = $(PRODUCTBAR_SELECTOR);
                $window.on('scroll', pageHeader.throttleScroll);
            },
            throttleScroll: function () {
                clearTimeout(scrollTimeout);
                throttleCount++;
                if (throttleCount == scrollThrottle) {
                    // make sure the pageheader element exists //
                    throttleCount = 0;
                    if ($productBar.length === 0) {
                        $productBar = $(PRODUCTBAR_SELECTOR);
                    }
                    pageHeader.handleCollapse();
                }
                scrollTimeout = setTimeout(function () {
                    pageHeader.handleCollapse();
                }, 200);
            },
            handleCollapse: function () {
                $window.scrollTop() >= 10 ? $productBar.addClass(PRODUCTBAR_COLLAPSE_CLASS) : $productBar.removeClass(PRODUCTBAR_COLLAPSE_CLASS);
            }
        };
    return pageHeader;
};
