import { brap } from './helpers';

module.exports = function ($) {
    let SEARCH_ICON_ATTRIBUTE = 'data-gds-search-icon',
        SEARCH_ATTRIBUTE = 'data-gds-search',
        SEARCH_HOLDER_ATTRIBUTE = 'data-gds-search-input-holder',
        NO_RESULT_ATTRIBUTE = 'data-gds-no-results',
        NO_RESULT_CLASS = 'gds-search__input-holder--no-result',
        SEARCH_SHOW_CLASS = 'gds-search--shown',
        SEARCH_INPUT_ATTRIBUTE = 'data-gds-search-input',
        TYPEAHEAD_OPTIONS_ATTRIBUTE = 'data-gds-typeahead-index',
        TYPEAHEAD_TOGGLE = 'data-gds-typahead-selected',
        TYPEAHEAD_SELECTED_CLASS = 'gds-search__typeahead-item--selected',
        TYPEAHEAD_SELECTED_ATTRIBUTE = 'data-gds-typahead-selected=true',
        ICON_CLICK_EVT = `click.${SEARCH_ICON_ATTRIBUTE}`,
        SEARCH_CLICK_EVT = `click.${SEARCH_ATTRIBUTE}`,
        INPUT_CLICK_EVT = `click.${SEARCH_INPUT_ATTRIBUTE}`,
        INPUT_FOCUS_EVT = `focus.${SEARCH_INPUT_ATTRIBUTE}`,
        INPUT_BLUR_EVT = `blur.${SEARCH_INPUT_ATTRIBUTE}`,
        KEYDOWN_EVT = `keydown.${SEARCH_ATTRIBUTE}`,
        KEYPRESS_EVT = `keypress.${SEARCH_ATTRIBUTE}`;

    let loaded = false,
        searchOpen = false,
        typeaheadIndex = -1,
        focusTypeahead = false,
        $document = $(document),
        $search,
        $searchHolder,
        $searchIcon,
        $searchInput,
        search = {
            load: function (element) {
                if (loaded === false) {
                    // console.log('search component loaded');
                    loaded = true;

                    if (element != undefined) {
                        $search = element;
                    } else {
                        $search = $(brap(SEARCH_ATTRIBUTE));
                    }

                    $searchIcon = $(brap(SEARCH_ICON_ATTRIBUTE));
                    $searchHolder = $(brap(SEARCH_HOLDER_ATTRIBUTE));
                    $searchInput = $(brap(SEARCH_INPUT_ATTRIBUTE));

                    $document
                        // Click search icon
                        .on(ICON_CLICK_EVT, brap(SEARCH_ICON_ATTRIBUTE), search.open)
                        // Hide search
                        .on(SEARCH_CLICK_EVT, brap(SEARCH_ATTRIBUTE), search.close)
                        // Prevent close if you click the input itself
                        .on(INPUT_CLICK_EVT, brap(SEARCH_INPUT_ATTRIBUTE), function (event) {
                            event.stopPropagation();
                            return false;
                        })
                        // Use the keyboard to navigate options
                        .on(INPUT_FOCUS_EVT, brap(SEARCH_INPUT_ATTRIBUTE), function (event) {
                            $document.on(KEYDOWN_EVT, search.handleKeyPress);
                        })
                        // Search Input loses focus and the user isn't choosing typeahead options
                        .on(INPUT_BLUR_EVT, brap(SEARCH_INPUT_ATTRIBUTE), function (event) {
                            if (focusTypeahead == false) {
                                $document.off(KEYDOWN_EVT, search.handleKeyPress);
                            }
                        })
                        .on(KEYPRESS_EVT, search.handleHotkeys);
                }
            },
            selectOption: function (index) {
                search.deselectOption();
                $(`[${TYPEAHEAD_OPTIONS_ATTRIBUTE}=${index}]`)
                    .addClass(TYPEAHEAD_SELECTED_CLASS)
                    .attr(TYPEAHEAD_TOGGLE, true)
                    .focus();
                typeaheadIndex = index;
            },
            deselectOption: function () {
                $(brap(TYPEAHEAD_SELECTED_ATTRIBUTE))
                    .removeClass(TYPEAHEAD_SELECTED_CLASS)
                    .attr(TYPEAHEAD_TOGGLE, false);
            },
            handleUpDown: function (key) {
                focusTypeahead = true;
                $searchInput.blur();

                if (key === 38 && typeaheadIndex >= 0) {
                    typeaheadIndex--;
                    search.selectOption(typeaheadIndex);
                }

                if (key === 38 && typeaheadIndex === -1) {
                    focusTypeahead = false;
                    search.deselectOption();
                    $document.off(KEYDOWN_EVT, search.handleKeyPress);
                    $searchInput.focus();
                }

                if (key === 40 && typeaheadIndex < $(brap(TYPEAHEAD_OPTIONS_ATTRIBUTE)).length - 1) {
                    typeaheadIndex++;
                    search.selectOption(typeaheadIndex);
                }
            },
            handleHotkeys: function (event) {
                if (event.keyCode === 115 && $('input:focus').length === 0 && $('textarea:focus').length === 0 && !searchOpen) {
                    search.open();
                }
                if (searchOpen && event.keyCode == 27) {
                    search.close();
                }
            },
            handleKeyPress: function (event) {
                ///handle up/down on keyboard///
                if (event.keyCode == 38 || event.keyCode == 40) {
                    search.handleUpDown(event.keyCode);
                }
                ///handle enter press when results don't exist///
                if (event.keyCode === 13) {
                    if ($(brap(TYPEAHEAD_OPTIONS_ATTRIBUTE)).length === 1 && $(brap(NO_RESULT_ATTRIBUTE)).length === 1) {
                        $(brap(SEARCH_HOLDER_ATTRIBUTE)).addClass(NO_RESULT_CLASS);
                        setTimeout(function () {
                            $(brap(SEARCH_HOLDER_ATTRIBUTE)).removeClass(NO_RESULT_CLASS);
                        }, 1000);
                    }
                }
                if (searchOpen && event.keyCode == 27) {
                    search.close();
                }
            },
            open: function () {
                searchOpen = true;
                $(brap(SEARCH_ATTRIBUTE)).addClass(SEARCH_SHOW_CLASS);
                $(brap(SEARCH_INPUT_ATTRIBUTE)).focus();
                setTimeout(function () {
                    $(brap(SEARCH_INPUT_ATTRIBUTE)).val('');
                }, 0);
            },
            close: function () {
                searchOpen = false;
                $(brap(SEARCH_INPUT_ATTRIBUTE)).blur();
                $(brap(SEARCH_ATTRIBUTE)).removeClass(SEARCH_SHOW_CLASS);
                $document.off(KEYDOWN_EVT, search.handleKeyPress);
            }
        };

    /**
     * Search plugin for use with the Design System search component.
     * @version 1.1.23
     * @namespace gdsSearch
     */
    $.fn.gdsSearch = function () {
        let me = this,
            init = false;

        /**
         * Initialize the event listeners for the search component.
         * @memberof gdsSearch
         * @method init
         */
        this.init = function () {
            init = true;
            search.load(me);
            return me;
        },
        /**
         * Open the search component
         * @memberof gdsSearch
         * @method open
         */
        this.open = function () {
            search.open();
            return me;
        },
        /**
         * Hide the search component
         * @memberof gdsSearch
         * @method close
         */
        this.close = function () {
            search.close();
            return me;
        },
        /**
         * Select a specific open in the typeahead results
         * @param {Number} index
         * @memberof gdsSearch
         * @method selectOption
         */
        this.selectOption = function (index) {
            search.selectOption(index);
            return me;
        },
        /**
         * Deselect all options in the typeahead results
         * @memberof gdsSearch
         * @method deselectOptions
         */
        this.deselectOptions = function () {
            search.deselectOption();
            return me;
        };

        if (init === false) {
            this.init();
        }

        return this;
    };

    return search;
};
