module.exports = function ($) {
    const BUTTON_SELECTOR = '.gds-button',
        CLICK_NAMESPACE = 'click.' + BUTTON_SELECTOR,
        FEEDBACK_ATTRIBUTE = 'data-feedback';

    let $document = $(document),
        buttons = {
            load: function () {
                // Optionally add "data-feedback" attribute to any .btn to display different feedback text with animated ellipsis after the user clicks
                $(document).on(CLICK_NAMESPACE, BUTTON_SELECTOR, buttons.handleClick);
            },
            handleClick: function (e) {
                let $me = $(e.currentTarget),
                    initialText = $me.html(),
                    userFeedback = $me.attr(FEEDBACK_ATTRIBUTE);
                if (userFeedback) {
                    $me.attr({'disabled': 'disabled', 'data-text': initialText}).html('<i style="vertical-align:initial" class="fa fa-spinner fa-pulse fa-fw -m-r-2"></i>' + userFeedback);
                }
            },
            revertButton: function (button) {
                if (button.attr('data-text')) {
                    button.empty().html(button.attr('data-text')).removeAttr('disabled');
                }
            },
            revertAllButtons: function () {
                $(BUTTON_SELECTOR).each(function (i, e) {
                    buttons.revertButton($(e));
                });
            }
        };
    return buttons;
};
