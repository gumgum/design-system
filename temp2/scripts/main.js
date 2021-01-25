let $ = window.jQuery = window.$ = require('jquery');

// GumGum Design System components
let gdsComponents = {
    accordion: require('./components/gdsAccordion'),
    alert: require('./components/gdsAlert'),
    avatar: require('./components/gdsAvatar'),
    bubble: require('./components/gdsBubble'),
    buttonDropdown: require('./components/gdsButtonDropdown'),
    buttons: require('./components/gdsButtons'),
    cornerContent: require('./components/gdsCornerContent'),
    divider: require('./components/gdsDivider'),
    hotkeyToggle: require('./components/gdsHotkeyToggle'),
    inputs: require('./components/gdsInputs'),
    nav: require('./components/gdsNav'),
    onboarder: require('./components/gdsOnboarder'),
    searchSelect: require('./components/gdsSearchSelect'),
    slideNav: require('./components/gdsSlideNav'),
    pageHeader: require('./components/gdsPageHeader'),
    pagination: require('./components/gdsPagination'),
    rangeSlider: require('./components/gdsRangeSlider'),
    refinery: require('./components/gdsRefinery'),
    ribbon: require('./components/gdsRibbon'),
    search: require('./components/gdsSearch'),
    table: require('./components/gdsTable'),
    themes: require('./components/gdsThemes'),
    timeline: require('./components/gdsTimeline'),
    feedback: require('./components/gdsFeedback'),
    toolbelt: require('./components/gdsToolbelt'),
    transition: require('./components/gdsTransition')
};

$(document).ready(function () {
    window.gds = {};
    $.each(gdsComponents, function (i, v) {
        let j = v($);
        j.load();
        window.gds[i] = j;
    });
});
