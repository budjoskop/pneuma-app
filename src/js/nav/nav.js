// ----- Typical module

var $ = require('jquery');

module.exports = function() {
    // Main navigation

    var $trigger = $('.b-header__burger'),
        $nav = $('.c-nav'),
        $close = $nav.find('.c-nav__close');

    function triggerHandler() {
        $nav.slideDown(300);
    }

    function closeHandler() {
        $nav.slideUp(300);
    }

    $trigger.on('click', triggerHandler);
    $close.on('click', closeHandler);
};
