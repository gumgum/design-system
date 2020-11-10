module.exports = function ($) {
    const EVT_TOGGLE = 'click.gds-accordion-toggle',
        SELECTOR_TITLE = 'data-gds-accordion-title',
        SELECTOR_ITEM = 'data-gds-accordion-item',
        CLASS_ITEM_ACTIVE = 'gds-accordion__item--active';

    let loaded = false,
        $document = $(document),
        accordion = {
            load: function () {
                if (loaded === false) {
                    loaded = true;
                    $document.on(EVT_TOGGLE, '[' + SELECTOR_TITLE + ']', function (evt) {
                        $(evt.target).closest('[' + SELECTOR_ITEM + ']').toggleClass(CLASS_ITEM_ACTIVE);
                    });
                }
            },
            openItems: function (element, elementArray) {
                if (elementArray != undefined && elementArray.length > 0) {
                    element.find(elementArray.join(',')).addClass(CLASS_ITEM_ACTIVE);
                }
            },
            closeItems: function (element, elementArray) {
                if (elementArray != undefined && elementArray.length > 0) {
                    element.find(elementArray.join(',')).removeClass(CLASS_ITEM_ACTIVE);
                }
            },
            toggleItems: function (element, elementArray) {
                if (elementArray != undefined && elementArray.length > 0) {
                    element.find(elementArray.join(',')).toggleClass(CLASS_ITEM_ACTIVE);
                }
            },
            openAll: function (element) {
                element.find('[' + SELECTOR_ITEM + ']').addClass(CLASS_ITEM_ACTIVE);
            },
            closeAll: function (element) {
                element.find('[' + SELECTOR_ITEM + ']').removeClass(CLASS_ITEM_ACTIVE);
            }
        };
    /**
     * This function adds an event listener to each accordion section with a 'data-gds-accordion-title' attribute.
     * @param {Array} options
     * @version 1.1.3
     * @namespace gdsAccordion
     */
    $.fn.gdsAccordion = function (options) {
        let me = this,
            init = false;
        /**
         * Initialize an accordion.
         * @param {Array} options
         * @memberof gdsAccordion
         * @method init
         */
        this.init = function (options) {
            init = true;
            accordion.load();
            accordion.openItems(me, options);
            return me;
        };
        /**
         * Open a specific item within the accordion.
         * @param {Array} options
         * @memberof gdsAccordion
         * @method openItems
         */
        this.openItems = function (options) {
            accordion.openItems(me, options);
            return me;
        };
        /**
         * Close a specific item within the accordion.
         * @param {Array} options
         * @memberof gdsAccordion
         * @method closeItems
         */
        this.closeItems = function (options) {
            accordion.closeItems(me, options);
            return me;
        };
        /**
         * Toggle a specific item within the accordion.
         * @param {Array} options
         * @memberof gdsAccordion
         * @method toggleItems
         */
        this.toggleItems = function (options) {
            accordion.toggleItems(me, options);
            return me;
        };
        /**
         * Open all items within the accordion.
         * @memberof gdsAccordion
         * @method openAll
         */
        this.openAll = function () {
            accordion.openAll(me);
            return me;
        };
        /**
         * Close all items within the accordion.
         * @memberof gdsAccordion
         * @method closeAll
         */
        this.closeAll = function () {
            accordion.closeAll(me);
            return me;
        };
        if (init === false) {
            this.init(options);
        }
        return this;
    };

    return accordion;
};
