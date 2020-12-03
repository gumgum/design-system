import { brap, generateUUID } from './helpers';
import gdsTimeline from './gdsTimeline';

module.exports = function ($) {
    const
        // SELECTORS
        CONTAINER_SELECTOR = 'data-gds-onboarder-container',
        COMPONENT_SELECTOR = 'data-gds-onboarder',
        MENU_SELECTOR = 'data-gds-onboarder-menu',
        ARROW_SELECTOR = 'data-gds-onboarder-arrow',
        HIGHLIGHT_SELECTOR = 'data-gds-onboarder-highlight',
        TIMELINE_SELECTOR = 'data-gds-timeline',
        TIMELINE_ITEM_SELECTOR = 'data-gds-timeline-item',
        STEPNUMBER_SELECTOR = 'data-gds-onboarder-step-num',
        STEPNAME_SELECTOR = 'data-gds-onboarder-step-name',
        STEPDESC_SELECTOR = 'data-gds-onboarder-body',
        CLOSE_SELECTOR = 'data-gds-onboarder-close-button',
        // Event Names
        EVT_ARROW_CLICK = 'click.gds-onboarder-arrow',
        EVT_TIMELINE_CLICK = 'click.gds-onboarder-timeline-item-click',
        EVT_CLOSE_CLICK = 'click.gds-close-button',
        EVT_KEYDOWN = 'keydown.gds-onboarder-arrow',
        EVT_MOUSEWHEEL = 'mousewheel.prevent-scroll',
        EVT_OPENED = 'gds-onboarder.opened',
        EVT_ABORTED = 'gds-onboarder.aborted',
        EVT_FINISHED = 'gds-onboarder.finished',
        EVT_CLOSED = 'gds-onboarder.closed',
        // Classes & Modifiers
        ONBOARDER_SHOWN_CLASS = 'gds-onboarder--shown',
        TIMELINE_ITEM_CLASS = 'gds-timeline__item-icon gds-timeline__item-icon--white gds-timeline__item-icon--sm',
        STEP_POSITION_CLASS_MOD_LEFT = '-l',
        STEP_POSITION_CLASS_MOD_RIGHT = '-r',
        STEP_POSITION_CLASS_MOD_CENTER = '-c',
        STEP_POSITION_CLASS_MOD_TOP = '-t',
        STEP_POSITION_CLASS_MOD_BOTTOM = '-b',
        // Position shorthands
        POSITION_SHORTCUTS = ['top left', 'top center', 'top right', 'center left', 'center center', 'center right', 'bottom left', 'bottom center', 'bottom right'],
        // Markup
        ARROW_KEY_LEFT_MARKUP = '<i class="fa fa-fw fa-caret-left"></i>',
        ARROW_KEY_RIGHT_MARKUP = '<i class="fa fa-fw fa-caret-right"></i>',
        ARROW_KEY_CLOSE_MARKUP = '<i class="fa fa-fw fa-times"></i>';


    let $document = $(document),
        loaded = false,
        currentStep,
        $obContainer,
        $obComponent,
        $obStepNum,
        $obStepTitle,
        $obStepDesc,
        $obTimeline,
        $obTimelineSteps,
        $obBack,
        $obForward,
        $obCloseButton,
        defaultData = {
            steps: [],
            hideTimeline: false,
            callbacks: {
                onOpen: null,
                onAbort: null,
                onFinish: null,
                onClose: null
            }
        },
        obData = $.extend(true, {}, defaultData),
        onboarder = {
            load: function () {
                // nothing to do here
                if (loaded === false) {
                    loaded = true;
                }
            },
            construct: function (data) {
                // constructs the onboarder using provided data - only one instance of onboarder can exist at a time!
                currentStep = 0;
                obData = $.extend(true, obData, data);
                $obContainer = $(`<div class="gds-onboarder__overlay" ${CONTAINER_SELECTOR}/>`);
                $obComponent = $(`<div class="gds-onboarder" ${COMPONENT_SELECTOR}/>`);
                $obStepNum = $(`<span class="gds-onboarder__step-num" ${STEPNUMBER_SELECTOR}>1</span>`);
                $obStepTitle = $(`<h4 class="gds-text--header-sm -m-b-3" ${STEPNAME_SELECTOR}>${data.steps[0].title}</h4>`);
                $obStepDesc = $(`<p class="gds-text--body-sm" ${STEPDESC_SELECTOR}>${data.steps[0].description}</p>`);
                $obTimeline = $('<div class="gds-timeline" data-gds-timeline/>');
                $obForward = obData.steps.length === 1 ? $(`<button ${ARROW_SELECTOR}="next" class="gds-button gds-button--block gds-button--primary gds-button--sm">OK</button>`) : $(`<button ${ARROW_SELECTOR}="next" class="gds-onboarder__button gds-onboarder__button--right">${ARROW_KEY_RIGHT_MARKUP}</button>`);
                $obBack = $(`<button ${ARROW_SELECTOR}="prev" class="gds-onboarder__button gds-onboarder__button--left">${ARROW_KEY_LEFT_MARKUP}</button>`);
                $obTimelineSteps = $obTimeline.find(brap(TIMELINE_ITEM_SELECTOR));
                $obCloseButton = $(`<button class="gds-onboarder__close" ${CLOSE_SELECTOR} />`);

                let $header = $('<div class="gds-onboarder__header"/>'),
                    $body = $('<div class="gds-onboarder__body"/>'),
                    $footer = $('<div class="gds-onboarder__footer"/>'),
                    $timelineWrapper = $('<div class="gds-onboarder__timeline-wrapper"/>'),
                    $timelineItems = $('<ul class="gds-timeline__items"></ul>'),
                    $timelineProgress = $('<div class="gds-timeline__progress-wrapper gds-timeline__progress-wrapper--no-label gds-timeline__progress-wrapper--white gds-timeline__progress-wrapper--sm"><div class="gds-timeline__progress-indicator"></div></div>'),
                    step;

                $header.append($obStepNum).append($obStepTitle);
                $body.append($obStepDesc);

                for (step = 0; step < obData.steps.length; step++) {
                    let className = step === 0 ? 'gds-timeline__item--active' : '',
                        attributeValue = step === 0 ? 'active' : 'inactive',
                        $spacing = step === obData.steps.length - 1 ? '' : ' ',
                        $markup = `<li class="gds-timeline__item ${className}" ${TIMELINE_ITEM_SELECTOR}="${attributeValue}"><div class="${TIMELINE_ITEM_CLASS}"></div></li>`;
                    $timelineItems.append($markup).append($spacing);
                    obData.hideTimeline ? $timelineItems.addClass('-none') : '';
                }

                $timelineWrapper.append($obTimeline.append($timelineItems.append($timelineProgress)));

                if (obData.steps.length > 1) {
                    $footer.append($obBack);
                    $footer.append($timelineWrapper);
                }

                $footer.append($obForward);

                $obComponent.append($header)
                        .append($body)
                        .append($footer)
                        .append($obCloseButton)
                        .appendTo($obContainer.prependTo('body'));
                $document.on(EVT_ARROW_CLICK, brap(ARROW_SELECTOR), onboarder.handleArrowClick)
                    .on(EVT_TIMELINE_CLICK, `[${COMPONENT_SELECTOR}] [${TIMELINE_ITEM_SELECTOR}]`, onboarder.handleTimelineClick)
                    .on(EVT_CLOSE_CLICK, `[${COMPONENT_SELECTOR}] [${CLOSE_SELECTOR}]`, onboarder.handleCloseClick)
                    .on(EVT_KEYDOWN, onboarder.handleKeyboardPress)
                    .on(EVT_MOUSEWHEEL, onboarder.preventMouseWheel);

                onboarder.changeStep(currentStep);

                return $obContainer;

            },
            handleArrowClick: function (evt) {
                // handles arrow click and sends direction to dispatcher
                const $button = $(evt.currentTarget),
                    direction = $button.attr(ARROW_SELECTOR);
                onboarder.changeDispatcher(direction);
            },
            handleKeyboardPress: function (evt) {
                //listens for left/right arrows and escape key presses - all other keypresses are ignored
                let direction;
                switch (evt.which) {
                    case 39:
                        // next arrow
                        direction = 'next';
                        break;
                    case 37:
                        // prev arrow
                        direction = 'prev';
                        break;
                    case 27:
                        // escape key
                        onboarder.killIt();
                        return;
                    case 13:
                        //enter key
                        onboarder.changeDispatcher('next');
                        break;
                    default:
                        // anything else
                        return;
                }
                onboarder.changeDispatcher(direction);
            },
            handleTimelineClick: function (evt) {
                const $item = $(evt.currentTarget),
                    stepNumber = $item.index();
                onboarder.changeStep(stepNumber);
            },
            handleCloseClick: function (evt) {
                onboarder.killIt();
            },
            preventMouseWheel: function (evt) {
                evt.preventDefault();
                return false;
            },
            changeDispatcher: function (direction) {
                // increments or decrements the step based on the direction provided
                let totalSteps = obData.steps.length;
                if (currentStep === (totalSteps - 1) && direction === 'next') {
                    onboarder.killIt();
                    return;
                }

                let changeTo = direction === 'next' ? Math.min(currentStep + 1, totalSteps - 1) : Math.max(currentStep - 1, 0);

                gdsTimeline($).setActiveStep($obTimeline, changeTo);
                onboarder.changeStep(changeTo);
            },
            changeStep: function (stepNumber) {
                // changes the step number of the onboarder
                currentStep = stepNumber;
                onboarder.setStepNumber(currentStep);
                onboarder.setStepContent(currentStep);
                onboarder.setStepPosition(currentStep);
                if (currentStep === obData.steps.length - 1 && obData.steps.length > 1) {
                    $obForward.html(ARROW_KEY_CLOSE_MARKUP);
                    obData.callbacks.onFinish !== null ? obData.callbacks.onFinish() : '';
                    $document.trigger(EVT_FINISHED);
                } else if ($obForward.html() !== ARROW_KEY_RIGHT_MARKUP && obData.steps.length > 1) {
                    $obForward.html(ARROW_KEY_RIGHT_MARKUP);
                }
                $obBack.toggleClass('-disabled -pointer-events--none', currentStep === 0);
            },
            setStepNumber: function (stepNumber) {
                // sets the step number in the header
                $obStepNum.text(stepNumber + 1);
            },
            setStepContent: function (stepNumber) {
                // sets the content and headline of the component based on a step number
                $obStepTitle.text(obData.steps[stepNumber].title);
                $obStepDesc.text(obData.steps[stepNumber].description);
            },
            setStepPosition: function (stepNumber) {
                // Sets the position of the onboarder menu and determines the placement of the arrow on the menu
                let $target,
                    targetWidth,
                    targetHeight,
                    position,
                    left,
                    top,
                    $window = $(window),
                    windowWidth = $window.width(),
                    windowHeight = $window.height(),
                    componentWidth = $obComponent.width(),
                    componentHeight = $obComponent.height(),
                    positionType = {},
                    leftOffset,
                    topOffset,
                    scrollTop = $window.scrollTop(),
                    isShortcut = false,
                    arrowOffset = 20;

                if ($.inArray(obData.steps[stepNumber].target, POSITION_SHORTCUTS) !== -1) {
                    isShortcut = true;
                    targetWidth = 0;
                    targetHeight = 0;

                    let placements = obData.steps[stepNumber].target.split(' ');
                    if (placements[0] === 'top') {
                        top = 25;
                    } else if (placements[0] === 'center') {
                        top = windowHeight / 2 + componentHeight / 2;
                    } else {
                        top = windowHeight - 25;
                    }

                    if (placements[1] === 'left') {
                        left = 25;
                    } else if (placements[1] === 'center') {
                        left = windowWidth / 2;
                    } else {
                        left = windowWidth - 25;
                    }
                } else {
                    $target = $(obData.steps[stepNumber].target);
                    targetWidth = $target.outerWidth();
                    targetHeight = $target.outerHeight();
                    position = $target.offset();
                    left = position.left;
                    top = position.top;
                }
                // set scroll position to top to begin with:
                $window.scrollTop(0);

                // determine where to position the onboarder
                if (windowWidth < componentWidth) {
                    $obComponent.width(windowWidth - 20);
                }

                leftOffset = left + targetWidth / 2 - componentWidth / 2;
                positionType.horizontal = STEP_POSITION_CLASS_MOD_CENTER;

                if (top - componentHeight < -25) {
                    // console.log("too far up - position below the element");
                    positionType.vertical = STEP_POSITION_CLASS_MOD_TOP;
                    topOffset = top + targetHeight + 25;
                } else {
                    positionType.vertical = STEP_POSITION_CLASS_MOD_BOTTOM;
                    topOffset = top - componentHeight - 25;
                    arrowOffset = 80;
                }


                if (leftOffset + componentWidth > windowWidth) {
                    leftOffset = Math.min(left + targetWidth / 2 - componentWidth + arrowOffset, windowWidth - componentWidth - 10);
                    // if that still doesn't totally fit then the screen is basically the same width as the component, set to 10px from left and hope for the best
                    if (leftOffset < 0) {
                        leftOffset = 10;
                    }
                    positionType.horizontal = STEP_POSITION_CLASS_MOD_RIGHT;
                }
                if (leftOffset < 0) {
                    leftOffset = Math.max(10, left + targetWidth / 2 - arrowOffset);
                    // if that still doesn't totally fit then the screen is basically the same width as the component, set to 10px from left and hope for the best
                    if (leftOffset + componentWidth > windowWidth) {
                        leftOffset = 10;
                    }
                    positionType.horizontal = STEP_POSITION_CLASS_MOD_LEFT;
                }

                // scroll the page if necessary
                top + targetHeight + 25 > windowHeight ? $window.scrollTop(scrollTop - (windowHeight - (top + targetHeight + 25))) : $window.scrollTop(0);

                // if scroll puts object too far above the top of the page move it down as little as possible
                topOffset < $window.scrollTop() ? topOffset = $window.scrollTop() : '';


                $obComponent.css('transform', `translate(${Math.round(leftOffset)}px, ${Math.round(topOffset)}px)`);
                !isShortcut ? $obComponent.attr('class', `gds-onboarder gds-onboarder-${positionType.vertical}${positionType.horizontal}`) : $obComponent.attr('class', 'gds-onboarder gds-onboarder--no-arrow');
                !isShortcut ? onboarder.drawHighlight(top, left, targetHeight, targetWidth) : onboarder.drawHighlight(-100, -100, 0, 0);

                obData.steps.length === 1 ? $obComponent.addClass('gds-onboarder--no-arrow') : '';
            },
            drawHighlight: function (top, left, height, width) {
                // creates or moves the highlight element
                let $highlight = $(brap(HIGHLIGHT_SELECTOR));

                if ($highlight.length === 0) {
                    $highlight = $(`<div class="gds-onboarder__highlight" ${HIGHLIGHT_SELECTOR}/>`);
                    $highlight.appendTo($obContainer);
                }

                $highlight.css({
                    'height': height + 50,
                    'width': width + 50,
                    'top': top - 25,
                    'left': left - 25
                });
            },
            init: function (data) {
                onboarder.showIt(onboarder.construct(data));
            },
            showIt: function (element) {
                // reveals the component
                setTimeout(function () {
                    $obContainer.addClass(ONBOARDER_SHOWN_CLASS);
                    obData.callbacks.onOpen !== null ? obData.callbacks.onOpen() : '';
                    $document.trigger(EVT_OPENED);
                }, 250);
            },
            killIt: function () {
                // hides the component, removes the listeners, then removes it entirely
                $obContainer.removeClass(ONBOARDER_SHOWN_CLASS);
                $document.off(`${EVT_ARROW_CLICK} ${EVT_TIMELINE_CLICK} ${EVT_CLOSE_CLICK} ${EVT_KEYDOWN} ${EVT_MOUSEWHEEL}`);
                if (currentStep === (obData.steps.length - 1)) {
                    obData.callbacks.onClose !== null ? obData.callbacks.onClose() : '';
                    $document.trigger(EVT_CLOSED);
                } else {
                    obData.callbacks.onClose !== null ? obData.callbacks.onAbort() : '';
                    $document.trigger(EVT_ABORTED);
                }
                obData = {};
                obData = defaultData;
                currentStep = 0;
                setTimeout(function () {
                    $obContainer.empty().remove();
                }, 250);
            }
        };

    return onboarder;
};
