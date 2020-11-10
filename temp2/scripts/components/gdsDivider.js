module.exports = function ($) {
    const DIVIDER_ATTRIBUTE = 'data-gds-divider',
        ARROW_ATTRIBUTE = 'data-gds-arrow',
        SEGMENT_ATTRIBUTE = 'data-gds-segment',
        ARROW_COLLAPSE_CLASS = 'gds-divider__arrow--collapse',
        SEGMENT_COLLAPSE_CLASS = 'gds-segment--collapse',
        DIVIDER_CLICK_EVT = `click.${DIVIDER_ATTRIBUTE}`;

    let $document = $(document),
        divider = {
            load: function () {
                $document.on(DIVIDER_CLICK_EVT, `[${DIVIDER_ATTRIBUTE}]`, divider.handleClick);
            },
            handleClick: function (e) {
                let $me = $(e.currentTarget),
                    target_id = $me.attr(DIVIDER_ATTRIBUTE);
                $me.find(`[${ARROW_ATTRIBUTE}]`).toggleClass(ARROW_COLLAPSE_CLASS);
                $(`[${SEGMENT_ATTRIBUTE}=${target_id}]`).toggleClass(SEGMENT_COLLAPSE_CLASS);
            }
        };
    return divider;
};
