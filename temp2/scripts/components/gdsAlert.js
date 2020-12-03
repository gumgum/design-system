import { generateUUID } from './helpers';
/**
 * This component is used to display styled alert and confirm modals.
 * @version 1.2.3
 * @namespace gdsAlert
 */
module.exports = function ($) {
    const ALERT_SHOWN_CLASS = 'gds-alert--shown',
        YES_CLICK_EVT = 'gds-alert.yes-clicked',
        NO_CLICK_EVT = 'gds-alert.no-clicked';

    let $document = $(document),
        loaded = false,
        alert = {
            load: function () {
                if (loaded === false) {
                    loaded = true;
                    /* doesn't have anything that loads automatically */
                }
            },
            construct: function (options) {

                let uuid = generateUUID(),
                    buttonClass,
                    buttonMargin = '-p-h-4 -m-b-0',
                    buttons = [],
                    buttonText = ['OK', 'No'],
                    iconClass = options.hasOwnProperty('icon') ? options.icon : 'context',
                    icon,
                    body = $(`<div class="gds-alert__body"><p>${options.message}</p></div>`),
                    footer = $('<div class="gds-alert__footer"/>'),
                    headerClass,
                    header,
                    title,
                    overlay = $(`<div class="gds-alert__overlay" data-gds-alert-overlay data-uuid="${uuid}">`),
                    alertElm = $('<div class="gds-alert"/>'),
                    clickEvt = `click.gds-alert-${uuid}`;

                switch (options.context) {

                    case 'primary':
                        if (iconClass === 'context') {
                            iconClass = 'fa-exclamation-circle';
                        }
                        headerClass = 'gds-alert__header--primary';
                        buttonClass = 'gds-button--primary';
                        break;

                    case 'secondary':
                        if (iconClass === 'context') {
                            iconClass = 'fa-exclamation-circle';
                        }
                        headerClass = 'gds-alert__header--secondary';
                        buttonClass = 'gds-button--secondary';
                        break;

                    case 'info':
                        if (iconClass === 'context') {
                            iconClass = 'fa-info-circle';
                        }
                        headerClass = 'gds-alert__header--info';
                        buttonClass = 'gds-button--info';
                        break;

                    case 'success':
                        if (iconClass === 'context') {
                            iconClass = 'fa-check-circle';
                        }
                        headerClass = 'gds-alert__header--success';
                        buttonClass = 'gds-button--success';
                        break;

                    case 'warning':
                        if (iconClass === 'context') {
                            iconClass = 'fa-exclamation-triangle';
                        }
                        headerClass = 'gds-alert__header--warning';
                        buttonClass = 'gds-button--warning';
                        break;

                    case 'danger':
                        if (iconClass === 'context') {
                            iconClass = 'fa-times-circle';
                        }
                        headerClass = 'gds-alert__header--danger';
                        buttonClass = 'gds-button--danger';
                        break;
                }

                ///build header///
                header = $(`<div class="gds-alert__header ${headerClass}"></div>`);
                icon = $(`<i class="gds-alert__icon fa ${iconClass}" aria-hidden="true"></i>`);
                header.append(icon);

                if (options.hasOwnProperty('title')) {
                    title = $(`<h2 class="gds-alert__title">${options.title}</h2>`);
                    header.append(title);
                }

                ///build footer & buttons///
                if (options.type === 'confirm') {
                    buttonText[0] = 'Yes';
                    buttonMargin = '-p-h-6 -m-b-0 -m-r-2';
                }

                if (options.hasOwnProperty('buttonText')) {
                    if (options.buttonText[0] != undefined) {
                        buttonText[0] = options.buttonText[0];
                    }
                    if (options.buttonText[1] != undefined) {
                        buttonText[1] = options.buttonText[1];
                    }
                }

                buttons[0] = $(`<button class="gds-button ${buttonClass} ${buttonMargin}" data-gds-alert-confirm-${uuid}>${buttonText[0]}</button>`);
                footer.append(buttons[0]);

                if (options.type === 'confirm') {
                    buttons[1] = $(`<button class="gds-button gds-button--outline p-h-4 -m-b-0" data-gds-alert-cancel-${uuid}>${buttonText[1]}</button>`);
                    footer.append(buttons[1]);
                }

                ///combine it all!///
                alertElm.append(header)
                        .append(body)
                        .append(footer)
                        .appendTo(overlay.prependTo('body'));

                ///bind event listeners///
                alertElm
                    .on(clickEvt, `[data-gds-alert-confirm-${uuid}]`, function (evt) {
                        evt.stopPropagation();
                        ///close alert///
                        alert.killIt(uuid);
                        //trigger custom event that can be listened for
                        $document.trigger(YES_CLICK_EVT);

                        if (options.hasOwnProperty('callbacks') && options.callbacks.onYes != undefined) {
                            ////if custom callback is specified////
                            options.callbacks.onYes(evt);
                        } else {
                            ///otherwise attempt to use a default behavior///
                            if (options.event.target.tagName === 'INPUT' && $(options.event.target).attr('type') === 'submit') {
                                $(options.event.target).parents('form').submit();
                                return;
                            }
                            if (options.event.target.tagName === 'A' && $(options.event.target).attr('href')) {
                                window.location = $(options.event.target).attr('href');
                                return;
                            }
                        }
                    })
                    .on(clickEvt, `[data-gds-alert-cancel-${uuid}]`, function (evt) {
                        evt.stopPropagation();
                        ///close alert///
                        alert.killIt(uuid);

                        //trigger custom event that can be listened for
                        $document.trigger(NO_CLICK_EVT);

                        ////if custom callback is specified////
                        if (options.hasOwnProperty('callbacks') && options.callbacks.onNo != undefined) {
                            options.callbacks.onNo(evt);
                        }
                    });

                return uuid;

            },
            pop: function (options) {
                alert.showIt(alert.construct(options));
            },
            showIt: function (uuid) {
                let elm = $(`[data-uuid="${uuid}"]`);
                setTimeout(function () {
                    elm.addClass(ALERT_SHOWN_CLASS);
                }, 50);
            },
            killIt: function (uuid) {
                let elm = $(`[data-uuid="${uuid}"]`);
                elm.removeClass(ALERT_SHOWN_CLASS);
                $document.off(`click.gds-alert-${uuid}`);
                setTimeout(function () {
                    elm.empty().remove();
                }, 250);
            }
        };

    return alert;
};
