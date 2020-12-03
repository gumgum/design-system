import { brap } from './helpers';

module.exports = function ($) {
    const TOOLBELT_ATTRIBUTE = 'data-gds-toolbelt',
        TOOLBELT_SELECTOR = brap(TOOLBELT_ATTRIBUTE),
        TOOLBELT_ITEMS_ATTRIBUTE  = 'data-gds-toolbelt-items',
        TOOLBELT_ITEMS_SELECTOR = brap(TOOLBELT_ITEMS_ATTRIBUTE),
        TOOLBELT_ITEM_ATTRIBUTE  = 'data-gds-toolbelt-item',
        TOOLBELT_ITEM_SELECTOR = brap(TOOLBELT_ITEM_ATTRIBUTE),
        TOOLBELT_BUTTON_ATTRIBUTE = 'data-gds-toolbelt-action',
        TOOLBELT_BUTTON_SELECTOR = brap(TOOLBELT_BUTTON_ATTRIBUTE),
        CLASS_DISABLED = 'gds-toolbelt__item--disabled',
        ACTION_TYPE_TOGGLE_LOCK = 'toggle-lock',
        ACTION_TYPE_PIN_LEFT = 'pin-left',
        ACTION_TYPE_PIN_CENTER = 'pin-center',
        ACTION_TYPE_PIN_RIGHT = 'pin-right',
        ACTION_TYPE_TOGGLE_UNIT = 'toggle-unit',
        ACTION_TYPE_MOVE_FORWARD = 'move-forward',
        ACTION_TYPE_MOVE_BACKWARD = 'move-backward',
        ACTION_TYPE_TOGGLE_TILE = 'toggle-tile',
        ACTION_TYPE_TOGGLE_POUCH = 'toggle-pouch',
        ACTION_TYPE_TOGGLE_SHADOW = 'toggle-shadow',
        ITEM_CLICK_EVT = `click.${TOOLBELT_ITEM_ATTRIBUTE}`;

    let $doc = $(document),
        toolbelt = {
            load: function () {
                $doc.on(ITEM_CLICK_EVT, TOOLBELT_BUTTON_SELECTOR, toolbelt.handleClick);
            },
            handleClick: function (e) {

                let $item = $(this),
                    actionType = $item.attr(TOOLBELT_BUTTON_ATTRIBUTE),
                    $parentComponent = $item.parents(TOOLBELT_SELECTOR);

                switch(actionType) {
                    case ACTION_TYPE_TOGGLE_LOCK: 
                        toolbelt.toggleLock($item, $parentComponent, actionType);
                        break;

                    case ACTION_TYPE_PIN_LEFT:
                    case ACTION_TYPE_PIN_CENTER: 
                    case ACTION_TYPE_PIN_RIGHT: 
                        toolbelt.changePinning($item, $parentComponent, actionType);
                        break;

                    case ACTION_TYPE_TOGGLE_UNIT: 
                        toolbelt.toggleUnit($item, $parentComponent, actionType);
                        break;

                    case ACTION_TYPE_MOVE_FORWARD:
                    case ACTION_TYPE_MOVE_BACKWARD:
                        toolbelt.changeLayer($item, $parentComponent, actionType);
                        break;

                    case ACTION_TYPE_TOGGLE_TILE:
                        toolbelt.toggleTile($item, $parentComponent, actionType);
                        break;

                    case ACTION_TYPE_TOGGLE_POUCH:
                        toolbelt.togglePouch($item, $parentComponent, actionType);
                        break;

                    case ACTION_TYPE_TOGGLE_SHADOW:
                        toolbelt.toggleShadow($item, $parentComponent, actionType);
                        break;
                }
            },
            toggleLock: function ($elm, $parentComponent, actionType) {

                let $item = $elm.parents(TOOLBELT_ITEM_SELECTOR),
                    $label = $item.find('label'),
                    $icon = $item.find('i'),
                    labelText = $label.text() === 'Lock' ? 'Unlock' : 'Lock';

                $item.toggleClass('gds-toolbelt__item-icon--active');
                $icon.toggleClass('bt-lock').toggleClass('bt-lock-open');

                $parentComponent.find(TOOLBELT_ITEM_SELECTOR).each(function (index, elm) {
                    let $otherItem = $(elm);
                    if(!$item.is($otherItem)) {
                        $otherItem.toggleClass(CLASS_DISABLED);
                    }
                });

                $label.text(labelText);
            },
            changePinning: function ($elm, $parentComponent, actionType) {

                let $item = $elm.parents(TOOLBELT_ITEM_SELECTOR),
                    $label = $item.find('label'),
                    $icon = $item.find('i');
                $parentComponent.find('.gds-toolbelt__item-icon--active').removeClass('gds-toolbelt__item-icon--active');
                $elm.addClass('gds-toolbelt__item-icon--active');
                if(actionType === 'pin-right') {
                    $parentComponent.find('.bt-long-arrow-left').removeClass('bt-long-arrow-left').addClass('bt-long-arrow-right');
                } else {
                    $parentComponent.find('.bt-long-arrow-right').addClass('bt-long-arrow-left').removeClass('bt-long-arrow-right');
                }

            },
            toggleUnit: function ($elm, $parentComponent, actionType) {
                let buttonText = $elm.text() === 'px' ? '%' : 'px';
                $elm.text(buttonText);
            },
            changeLayer: function ($elm, $parentComponent, actionType) {
                console.log(actionType);
                let $num = $elm.parents('[data-gds-toolbelt-item]').find('[data-gds-toolbelt-item-number]'),
                    num = actionType === 'move-forward' ? parseFloat($num.text())+1 : parseFloat($num.text())-1;
                console.log($num);
                $num.text(num);
            },
            toggleTile: function ($elm, $parentComponent, actionType) {

                let $item = $elm.parents(TOOLBELT_ITEM_SELECTOR),
                    $icon = $item.find('img'),
                    newIcon = $icon.attr('src') === '../images/icon_tile--active.svg' ? '../images/icon_tile--inactive.svg' : '../images/icon_tile--active.svg';
                $icon.attr('src', newIcon);

            },
            togglePouch: function ($elm, $parentComponent, actionType) {
                let $item = $elm.parents(TOOLBELT_ITEM_SELECTOR),
                    pouchId = $elm.attr('data-gds-toolbelt-target-pouch'),
                    $pouch = $parentComponent.find(`[data-gds-toolbelt-pouch=${pouchId}]`);
                $pouch.toggleClass('gds-toolbelt__pouch--open');
                $item.toggleClass('gds-toolbelt__item--expanded');
            },
            toggleShadow: function ($elm, $parentComponent, actionType) {
                let $item = $elm.parents(TOOLBELT_ITEM_SELECTOR),
                    $icon = $item.find('img'),
                    newIcon = $icon.attr('src') === '../images/icon_shadow--active.svg' ? '../images/icon_shadow--inactive.svg' : '../images/icon_shadow--active.svg';
                $icon.attr('src', newIcon);
            }
        };
    return toolbelt;
};
