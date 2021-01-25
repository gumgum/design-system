import { brap } from './helpers';

module.exports = function ($) {
    const COMPONENT_ATTRIBUTE = 'data-gds-search-select',
        COMPONENT_SELECTOR = brap(COMPONENT_ATTRIBUTE),
        CONTROL_ATTRIBUTE = 'data-gds-search-select-control',
        CONTROL_SELECTOR = brap(CONTROL_ATTRIBUTE),
        INPUT_ATTRIBUTE = 'data-gds-search-select-input',
        INPUT_SELECTOR = brap(INPUT_ATTRIBUTE),
        ITEM_ATTRIBUTE = 'data-gds-search-select-item',
        ITEM_SELECTOR = brap(ITEM_ATTRIBUTE),
        MENU_ATTRIBUTE = 'data-gds-search-select-menu',
        MENU_SELECTOR = brap(MENU_ATTRIBUTE),
        LIST_ATTRIBUTE = 'data-gds-search-select-list',
        LIST_SELECTOR = brap(LIST_ATTRIBUTE),
        TAGHOLDER_ATTRIBUTE = 'data-gds-search-select-tag-holder',
        TAGHOLDER_SELECTOR = brap(TAGHOLDER_ATTRIBUTE),
        TAG_ATTRIBUTE = 'data-gds-search-select-tag',
        TAG_SELECTOR = brap(TAG_ATTRIBUTE),
        TAGINDICATOR_ATTRIBUTE = 'data-gds-tag-indicator',
        TAGINDICATOR_SELECTOR = brap(TAGINDICATOR_ATTRIBUTE),
        CLEAR_BUTTON_ATTRIBUTE = 'data-gds-search-select-clear',
        CLEAR_BUTTON_SELECTOR = brap('data-gds-search-select-clear'),
        TOGGLE_ATTRIBUTE = 'data-gds-search-select-toggle',
        TOGGLE_SELECTOR = brap('data-gds-search-select-toggle'),
        SIZE_ATTRIBUTE = 'data-gds-search-select-size',
        ACTIVE_COMPONENT_CLASS = 'gds-search-select--open',
        ACTIVE_BUBBLE_CLASS = 'gds-search-select__tag-holder--bubble-active',
        HAS_TAG_CLASS = 'gds-search-select__input--has-tag',
        HAS_TAG_SM_CLASS = 'gds-search-select__input--has-tag-sm',
        HAS_TAG_XS_CLASS = 'gds-search-select__input--has-tag-xs',
        FOCUS_EVENT = `focus.${INPUT_ATTRIBUTE}`,
        BLUR_EVENT = `blur.${INPUT_ATTRIBUTE}`,
        CLICK_OPEN_EVENT = `click.open-${CONTROL_ATTRIBUTE}`,
        CLICK_INSIDE = `click.inside-${COMPONENT_SELECTOR}`,
        CLICK_CLOSE_EVENT = `click.close-${CONTROL_ATTRIBUTE}`,
        CLICK_ITEM_EVENT = `click.item-${ITEM_ATTRIBUTE}`,
        CLEAR_CLICK_EVENT = `click.clear-${CLEAR_BUTTON_ATTRIBUTE}`,
        CLICK_TOGGLE_EVENT = `click.toggle-${TOGGLE_ATTRIBUTE}`,
        CLICK_TAG_REMOVE = `click.cleartag-${TAG_ATTRIBUTE}`,
        TAG_HOVER_EVENT = `mouseenter.show-${TAGINDICATOR_ATTRIBUTE}`,
        TAG_HOVEROFF_EVENT = `mouseleave.hide-${TAGINDICATOR_ATTRIBUTE}`,
        CLEAR_BUTTON_MARKUP = '<button class="gds-search-select__clear" data-gds-search-select-clear><i class="btl bt-fw bt-times"></i></button>',
        SMALL_CLEAR_BUTTON_MARKUP = '<button class="gds-search-select__clear gds-search-select__clear--sm" data-gds-search-select-clear><i class="btl bt-fw bt-times"></i></button>',
        XSMALL_CLEAR_BUTTON_MARKUP = '<button class="gds-search-select__clear gds-search-select__clear--xs" data-gds-search-select-clear><i class="btl bt-fw bt-times"></i></button>',
        TAG_MARKUP = '<div class="-m-a-1 gds-tag gds-tag--sm gds-tag--primary gds-tag--with-button gds-tag--with-button-sm" data-gds-search-select-tag="null">tagValue<button class="gds-tag__option gds-tag__option--sm gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>',
        SMALL_TAG_MARKUP = '<div class="-m-a-1 gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-search-select-tag="null">tagValue<button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>',
        TAG_INDICATOR_MARKUP = '<div class="gds-search-select__tag-indicator gds-tag gds-tag--sm gds-tag--primary gds-tag--with-button gds-tag--with-button-sm" data-gds-tag-indicator><span>1 Selected</span><button class="gds-tag__option gds-tag__option--sm gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>',
        SMALL_TAG_INDICATOR_MARKUP = '<div class="gds-search-select__tag-indicator gds-search-select__tag-indicator--sm gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-tag-indicator><span>1 Selected</span><button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>',
        XSMALL_TAG_INDICATOR_MARKUP = '<div class="gds-search-select__tag-indicator gds-search-select__tag-indicator--xs gds-tag gds-tag--xs gds-tag--primary gds-tag--with-button gds-tag--with-button-xs" data-gds-tag-indicator><span>1 Selected</span><button class="gds-tag__option gds-tag__option--xs gds-tag__option--primary"><i class="btl bt-fw bt-times"></i></button></div>',
        LISTITEM_MARKUP = '<li class="gds-search-select__menu-item" data-gds-search-select-item="null">itemValue</li>';

    let $document = $(document),
        expanded = false,
        hasClearButton = false,
        $component,
        $control,
        $input,
        $menu,
        $list,
        $tagHolder,
        $clearButton = null,
        $indicatorTag,
        inputType,
        placeHolder,
        hideTimeout,
        hideTimeoutLength = 750,
        searchSelect = {
            load: function () {
                $document.on(CLICK_OPEN_EVENT, CONTROL_SELECTOR, searchSelect.handleControlClick)
                    .on(CLICK_TOGGLE_EVENT, TOGGLE_SELECTOR, searchSelect.handleToggleClick)
                    .on(TAG_HOVER_EVENT, TAGINDICATOR_SELECTOR, searchSelect.showBubble)
                    .on(TAG_HOVEROFF_EVENT, TAGINDICATOR_SELECTOR, searchSelect.hideBubble)
                    .on(TAG_HOVER_EVENT, TAGHOLDER_SELECTOR, searchSelect.showBubble)
                    .on(TAG_HOVEROFF_EVENT, TAGHOLDER_SELECTOR, searchSelect.hideBubble)
                    .on(CLEAR_CLICK_EVENT, TAGINDICATOR_SELECTOR, searchSelect.handleClearClick)
                    .on(CLICK_TAG_REMOVE, TAG_SELECTOR, searchSelect.removeTag);

            },
            handleToggleClick: function (e) {
                e.stopPropagation();
                $control = $(this).parent(CONTROL_SELECTOR);
                !expanded ? searchSelect.expandMenu($control) : searchSelect.collapseMenu($component);
            },
            handleControlClick: function (e) {
                $control = $(this);
                !expanded && searchSelect.expandMenu($control);
            },
            handleClickInside: function (e) {
                e.stopPropagation();
            },
            handleClickOutside: function (e) {
                searchSelect.collapseMenu($component);
            },
            handleClickItem: function (e) {
                let $elm = $(this),
                    id = $elm.attr(ITEM_ATTRIBUTE),
                    value = $elm.text();

                if (inputType === 'single') {
                    searchSelect.collapseMenu($component);
                    searchSelect.populateSingleInput($elm, id, value);
                }
                if (inputType === 'multi') {
                    searchSelect.addMultiSelection($elm, id, value);
                }
            },
            handleClearClick: function (e) {
                console.log('HANDLE CLEAR');
                e.stopPropagation();
                searchSelect.removeClearButton();
                if (inputType === 'single') {
                    let entry = [{'id': $input.attr('data-gds-id'), 'value': $input.val()}];
                    // searchSelect.addBackEntries(entry);
                    searchSelect.uncheckEntry(entry);
                    $input.val('');
                } else {
                    let $tags = $(TAG_SELECTOR),
                        entries = $tags.map(function (id, value) {
                            return [{'id': $(this).attr(TAG_ATTRIBUTE), 'value': $(this).text() }];
                        });
                    searchSelect.uncheckEntry(entries);
                    // searchSelect.addBackEntries(entries);
                    // $input.val('').attr('placeholder', placeHolder);
                    $tagHolder.empty();
                }
            },
            removeTag: function (e) {
                let $tag = $(this),
                    entry = $(this).map(function (id, value) {
                        return [{'id': $(this).attr(TAG_ATTRIBUTE), 'value': $(this).text() }];
                    });
                searchSelect.uncheckEntry(entry);
                $tag.remove();
                console.log($tagHolder.children().length);
                if ($tagHolder.children().length === 0) {

                    $tagHolder.empty().removeClass(ACTIVE_BUBBLE_CLASS);
                    searchSelect.removeClearButton();

                } else {

                    $(TAGINDICATOR_SELECTOR).find('span').text(`${$tagHolder.children().length} Selected`);

                }

            },
            uncheckEntry: function (entries) {
                let i;
                for (i = 0; i < entries.length; i++) {
                    let {id, value} = entries[i];
                    $list.find(`[${ITEM_ATTRIBUTE}=${id}]`).find('input').prop('checked', false);
                }
            },
            addBackEntries: function (entries) {
                let i;
                for (i = 0; i < entries.length; i++) {
                    let {id, value} = entries[i],
                        $listItem = $(LISTITEM_MARKUP.replace('itemValue', value)).attr(ITEM_ATTRIBUTE, id);
                    $list.append($listItem);
                }
                searchSelect.sortList();
            },
            sortList: function () {
                $list.find(ITEM_SELECTOR).sort(function (a, b) {
                    return +parseFloat($(a).attr(ITEM_ATTRIBUTE)) - +parseFloat($(b).attr(ITEM_ATTRIBUTE));
                }).appendTo($list);
            },
            expandMenu: function ($element) {
                expanded = true;

                $document.on(CLICK_ITEM_EVENT, ITEM_SELECTOR, searchSelect.handleClickItem)
                    .on(CLICK_INSIDE, COMPONENT_SELECTOR, searchSelect.handleClickInside)
                    .on(CLICK_CLOSE_EVENT, searchSelect.handleClickOutside);

                $menu = $element.parents(COMPONENT_SELECTOR).find(MENU_SELECTOR);
                $list = $menu.find(LIST_SELECTOR);
                $tagHolder = $element.parents(COMPONENT_SELECTOR).find(TAGHOLDER_SELECTOR);
                $input = $element.parent(COMPONENT_SELECTOR).find(INPUT_SELECTOR);
                $component = $element.parents(COMPONENT_SELECTOR);
                $component.addClass(ACTIVE_COMPONENT_CLASS);
                inputType = $component.attr(COMPONENT_ATTRIBUTE);

                $input.focus();
            },
            populateSingleInput: function ($elm, id, value) {

                if ($input.attr('data-gds-id') != undefined) {
                    let entry = [{'id': $input.attr('data-gds-id'), 'value': $input.val().replace(' ', '') }];
                    // searchSelect.addBackEntries(entry);
                    searchSelect.uncheckEntry(entry);
                }
                let val = value.replace(/ /g, '');

                let $checkbox = $elm.find('input');
                $checkbox.prop('checked', true);

                $input.val(val).attr('data-gds-id', id);
                if ($clearButton != null) {
                    searchSelect.removeClearButton();
                }
                searchSelect.addClearButton($control);
            },
            addClearButton: function ($element) {
                if (hasClearButton === false) {
                    let markup = CLEAR_BUTTON_MARKUP;
                    if ($component.attr(SIZE_ATTRIBUTE) === 'sm') {
                        markup = SMALL_CLEAR_BUTTON_MARKUP;
                    } else if ($component.attr(SIZE_ATTRIBUTE) === 'xs') {
                        markup = XSMALL_CLEAR_BUTTON_MARKUP;
                    }
                    $clearButton = $(markup);
                    $element.prepend($clearButton);
                    $document.on(CLEAR_CLICK_EVENT, CLEAR_BUTTON_SELECTOR, searchSelect.handleClearClick);
                    hasClearButton = true;
                }
            },
            addIndicatorTag: function ($element) {
                if (hasClearButton === false) {
                    let markup = TAG_INDICATOR_MARKUP,
                        hasTagClass = HAS_TAG_CLASS;

                    if ($component.attr(SIZE_ATTRIBUTE) === 'xs') {
                        markup = XSMALL_TAG_INDICATOR_MARKUP;
                        hasTagClass = HAS_TAG_XS_CLASS;
                    } else if ($component.attr(SIZE_ATTRIBUTE) === 'sm') {
                        markup = SMALL_TAG_INDICATOR_MARKUP;
                        hasTagClass = HAS_TAG_SM_CLASS;
                    }
                    $indicatorTag = $(markup);
                    $element.prepend($indicatorTag);

                    $input.addClass(hasTagClass);
                    hasClearButton = true;
                }
            },
            showBubble: function () {
                clearTimeout(hideTimeout);
                $tagHolder.addClass(ACTIVE_BUBBLE_CLASS);
            },
            hideBubble: function () {
                hideTimeout = setTimeout(function () {
                    $tagHolder.removeClass(ACTIVE_BUBBLE_CLASS);
                }, hideTimeoutLength);
            },
            addMultiSelection: function ($elm, id, value) {
                // placeHolder = $input.attr('placeholder');
                // $input.attr('placeholder','');
                let $checkbox = $elm.find('input'),
                    markup = $component.attr(SIZE_ATTRIBUTE) === 'sm' || 'xs' ? SMALL_TAG_MARKUP : TAG_MARKUP;

                if ($checkbox.prop('checked') === true) {
                    $checkbox.prop('checked', false);
                    let $tag = $tagHolder.find(`[${TAG_ATTRIBUTE}=${id}]`);
                    console.log($tag);
                    $tag.remove();
                    if ($tagHolder.children().length > 0) {
                        $(TAGINDICATOR_SELECTOR).find('span').text(`${$tagHolder.children().length} Selected`);
                    } else {
                        searchSelect.removeClearButton();
                    }
                }                else {
                    $checkbox.prop('checked', true);
                    let $tag = $(markup.replace('tagValue', value)).attr(TAG_ATTRIBUTE, id).appendTo($tagHolder);
                    $(TAGINDICATOR_SELECTOR).find('span').text(`${$tagHolder.children().length} Selected`);
                    searchSelect.addIndicatorTag($control);
                }
            },
            removeClearButton: function (e) {
                // $document.off(CLEAR_CLICK_EVENT);
                if ($clearButton) {
                    $clearButton.remove();
                }
                if ($indicatorTag) {
                    $indicatorTag.remove();
                    $tagHolder.removeClass(ACTIVE_BUBBLE_CLASS);

                    let hasTagClass = HAS_TAG_CLASS;
                    if ($component.attr(SIZE_ATTRIBUTE) === 'sm') {
                        hasTagClass = HAS_TAG_SM_CLASS;
                    } else if ($component.attr(SIZE_ATTRIBUTE) === 'xs') {
                        hasTagClass = HAS_TAG_XS_CLASS;
                    }
                    $input.removeClass(hasTagClass);
                }
                $input.focus();
                hasClearButton = false;
            },
            collapseMenu: function ($element) {
                expanded = false;
                $component.removeClass(ACTIVE_COMPONENT_CLASS);
                $document.off(CLICK_CLOSE_EVENT).off(CLICK_INSIDE).off(CLICK_ITEM_EVENT);
            }
        };
    return searchSelect;
};
