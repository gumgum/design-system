module.exports = function ($) {
    const CORNER_CONTENT_ATTRIBUTE = '[data-gds-corner-content]',
        CORNER_CONTENT_SWITCH_ATTRIBUTE = '[data-gds-corner-content-switch]', // For toggling sides
        CLICK_NAMESPACE = 'click.' + CORNER_CONTENT_ATTRIBUTE,
        CORNER_CONTENT_CLASSNAME = '.gds-corner-content';

    let $document = $(document),
        cornerContent = {
            load: () => {
                $document.on(CLICK_NAMESPACE, CORNER_CONTENT_ATTRIBUTE, () => {
                    $(CORNER_CONTENT_ATTRIBUTE).closest(CORNER_CONTENT_CLASSNAME).toggleClass('gds-corner-content--shown');
                });

                $document.on(CLICK_NAMESPACE, CORNER_CONTENT_SWITCH_ATTRIBUTE, () => {
                    $(CORNER_CONTENT_ATTRIBUTE).closest(CORNER_CONTENT_CLASSNAME).toggleClass('gds-corner-content--right').toggleClass('gds-corner-content--left');
                });
            }
        };

    return cornerContent;
};
