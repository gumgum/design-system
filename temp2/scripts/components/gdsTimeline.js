module.exports = function ($) {
    const ITEM_SELECTOR = 'data-gds-timeline-item',
        COMPONENT_SELECTOR = 'data-gds-timeline',
        BASE_CLASS = 'gds-timeline__item',
        ACTIVE_CLASS = 'gds-timeline__item--active',
        COMPLETED_CLASS = 'gds-timeline__item--completed',
        CLICK_EVT = `click.${ITEM_SELECTOR}`;

    let $document = $(document),
        timeline = {
            load: function () {
                $document.on(CLICK_EVT, `[${ITEM_SELECTOR}]`, timeline.handleClick);
            },
            handleClick: function (e) {
                let $button = $(e.currentTarget),
                    stepNum = $button.index(),
                    $element = $button.parents(`[${COMPONENT_SELECTOR}]`);
                timeline.setActiveStep($element, stepNum);
            },
            setActiveStep: function ($element, stepNum) {
                let $steps = $element.find(`[${ITEM_SELECTOR}]`);
                $steps.each(function (index, el) {
                    if (index < stepNum) {
                        el.setAttribute(ITEM_SELECTOR, 'completed');
                        el.setAttribute('class', `${BASE_CLASS} ${COMPLETED_CLASS}`);
                    } else if (index === stepNum) {
                        el.setAttribute(ITEM_SELECTOR, 'active');
                        el.setAttribute('class', `${BASE_CLASS} ${ACTIVE_CLASS}`);
                    } else {
                        el.setAttribute(ITEM_SELECTOR, 'inactive');
                        el.setAttribute('class', `${BASE_CLASS}`);
                    }
                });
            }
        };
    return timeline;
};
