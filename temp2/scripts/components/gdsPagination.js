module.exports = function ($) {
    const LINK_SELECTOR = 'data-paginate-link',
        LINK_CLICK_EVT = `click.${LINK_SELECTOR}`,
        ARROW_SELECTOR = 'data-page-change',
        ARROW_CLICK_EVT = `click.${ARROW_SELECTOR}`,
        INDICATOR_SELECTOR = 'data-page-indicate',
        ACTIVE_SELECTOR = 'data-paginate-active',
        ACTIVE_CLASS = 'gds-pagination__page-item--active';

    let $document = $(document),
        pagination = {
            load: function () {
                $document.off(LINK_CLICK_EVT)
                    .off(ARROW_CLICK_EVT)
                    .on(LINK_CLICK_EVT, `[${LINK_SELECTOR}]`, pagination.handlePageClick)
                    .on(ARROW_CLICK_EVT, `[${ARROW_SELECTOR}]`, pagination.handleArrowClick);
            },
            handlePageClick: function (e) {
                e.stopPropagation();
                let $element = $(e.target).parent();
                pagination.changeActive($element);
            },
            handleArrowClick: function (e) {
                e.stopPropagation();
                let $element = $(e.target),
                    direction = $element.attr(ARROW_SELECTOR),
                    $changeTo = $element.parent().parent().find(`[${ACTIVE_SELECTOR}="true"]`)[direction](`[${ACTIVE_SELECTOR}="false"]`);
                if ($changeTo.length > 0) {
                    pagination.changeActive($changeTo);
                }
            },
            changeActive: function ($element) {
                $element.attr(ACTIVE_SELECTOR, 'true').addClass(ACTIVE_CLASS).siblings(`[${ACTIVE_SELECTOR}="true"]`).attr(ACTIVE_SELECTOR, 'false').removeClass(ACTIVE_CLASS);
            }
        };
    return pagination;
};
